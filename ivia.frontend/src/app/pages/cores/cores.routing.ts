import { Routes, RouterModule } from '@angular/router';
import { CoresComponent } from './cores.component';

const routes: Routes = [
  {
    path: '',
    component: CoresComponent
  }
];

export const routing = RouterModule.forChild(routes);
