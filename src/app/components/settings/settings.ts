import { Component } from '@angular/core';


// Material Imports
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider"; // Use Module for consistency
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// NgRx Imports
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatSlideToggleModule,
    ThemeSwitcherComponent
],
  templateUrl: './settings.html'
})
export class SettingsComponent {}
