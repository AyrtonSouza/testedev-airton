import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../guards';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'formcor/:id', loadChildren: './cores/form/formcor.module#FormCorModule' },
      { path: 'cores', loadChildren: './cores/cores.module#CoresModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);