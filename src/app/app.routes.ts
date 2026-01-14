import { Routes } from '@angular/router';
import {MainDashboardComponent} from './components/dash/dash.component'
import { SettingsComponent } from './components/settings/settings';

export const routes: Routes = [
  { path: 'dashboard', component: MainDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  { path: 'settings', component: SettingsComponent }, // Example additional route
];
