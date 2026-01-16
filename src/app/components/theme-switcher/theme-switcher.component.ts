import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ThemeService } from '../../core/ThemeService';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { selectCurrentTheme, selectCurrentPalette } from '../../core/store';
import { MatIcon } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";

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
    MatIcon,
    MatGridListModule
]
})
export class ThemeSwitcherComponent {
  currentTheme$: Observable<string>;
  currentPalette$: Observable<string>;
  
  palettes = [
    { name: 'Default', value: 'default', color: '#673ab7' }, // Indigo-ish
    { name: 'Blue', value: 'blue', color: '#2196f3' },
    { name: 'Orange', value: 'orange', color: '#ff9800' },
    { name: 'Red', value: 'red', color: '#f44336' },
    { name: 'Violet', value: 'violet', color: '#ee82ee' },
    { name: 'Green', value: 'green', color: '#4caf50' },
    { name: 'Cyan', value: 'cyan', color: '#00bcd4' },
    { name: 'Yellow', value: 'yellow', color: '#ffeb3b' }
  ];

  constructor(private themeService: ThemeService, private store: Store) {
    this.currentTheme$ = this.store.select(selectCurrentTheme);
    this.currentPalette$ = this.store.select(selectCurrentPalette);
  }

  // Use MatSelectChange to extract the .value property
  onThemeChange(event: MatSelectChange) {
    this.themeService.setTheme(event.value);
  }

  onColorPaletteChange(event: MatSelectChange) {
    this.themeService.setColorPalette(event.value);
  }

  // Helper method to get the color string based on the selected value
   getSelectedColor(selectedValue: string): string {
    return this.palettes.find(p => p.value === selectedValue)?.color || "#ffffff";
  }
}
 