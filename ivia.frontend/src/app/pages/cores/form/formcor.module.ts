import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FormCorComponent } from './formcor.component';
import { routing } from './formcor.routing';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    SlimLoadingBarModule.forRoot(),
    NgbTooltipModule,
    NgbModule,
  ],
  declarations: [
    FormCorComponent
  ]
})
export class FormCorModule {}
