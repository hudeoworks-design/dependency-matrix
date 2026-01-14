import { Component, Renderer2, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { Store } from '@ngrx/store';
import { setTheme } from './core/store/theme.actions';
import { selectCurrentTheme } from './core/store/theme.selectors'; // 1. Use the name you imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'dependency-matrix';

  constructor(private store: Store, private renderer: Renderer2) {
    afterNextRender(() => {
      // 2. Use 'selectTheme' here to match your import
      this.store.select(selectCurrentTheme).subscribe(theme => {
        // 3. Ensure these strings match exactly what is in your Reducer/CSS
        this.renderer.removeClass(document.documentElement, 'light');
        this.renderer.removeClass(document.documentElement, 'dark');
        this.renderer.removeClass(document.documentElement, 'system');

        if (theme) {
          this.renderer.addClass(document.documentElement, theme);
        }
      });
    });
   }

  // 4. Match the parameter type to your action's props
  toggleTheme(theme: 'light' | 'dark') {
    this.store.dispatch(setTheme({ theme }));
  }
}
