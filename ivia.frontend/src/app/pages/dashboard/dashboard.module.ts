import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    SlimLoadingBarModule.forRoot(),
    CurrencyMaskModule
  ],
  declarations: [
    Dashboard
  ],
  providers: [

  ]
})
export class DashboardModule {}
