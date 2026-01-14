import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCurrentTheme } from './store/theme.selectors';
import { setTheme } from './store/theme.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme$: Observable<string>;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private store: Store
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.currentTheme$ = this.store.select(selectCurrentTheme);
    this.currentTheme$.subscribe(theme => this.applyTheme(theme));
  }

  private applyTheme(theme: string): void {
    // Remove previous theme class if any
    const body = this.document.body;
    body.classList.forEach(className => {
      if (className.endsWith('-theme')) {
        this.renderer.removeClass(body, className);
      }
    });

    // Add the new theme class
    this.renderer.addClass(body, theme);
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.store.dispatch(setTheme({ theme }));
  }
}
