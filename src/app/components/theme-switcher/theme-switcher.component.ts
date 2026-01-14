import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCurrentTheme, setTheme } from '../../core/store';
import { ThemeService } from '../../core/ThemeService';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule, // Required for mat-form-field
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
  ]
})
export class ThemeSwitcherComponent {
  currentTheme$: Observable<string>;

  constructor(private themeService: ThemeService, private store: Store) {
    this.currentTheme$ = this.store.select(selectCurrentTheme);
  }

  changeTheme(theme: 'light' | 'dark'): void {
    this.themeService.setTheme(theme);
  }

  // Use MatSelectChange to extract the .value property
  onThemeChange(event: MatSelectChange) {
    this.store.dispatch(setTheme({ theme: event.value }));
  }
}
