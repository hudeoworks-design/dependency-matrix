import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Material Imports
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'; // Added
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider"; // Use Module for consistency
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// NgRx Imports
import { setTheme } from '../../core/store/theme.actions';
import { selectCurrentTheme } from '../../core/store/theme.selectors';
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule, // Required for mat-form-field
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
    ThemeSwitcherComponent
],
  templateUrl: './settings.html'
})
export class SettingsComponent {
  currentTheme$: Observable<string>;

  constructor(private store: Store) {
    this.currentTheme$ = this.store.select(selectCurrentTheme);
  }
}
