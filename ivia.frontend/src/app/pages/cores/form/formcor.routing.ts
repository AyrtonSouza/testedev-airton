import { Routes, RouterModule } from '@angular/router';
import { FormCorComponent } from './formcor.component';

const routes: Routes = [
  {
    path: '',
    component: FormCorComponent
  }
];

export const routing = RouterModule.forChild(routes);
