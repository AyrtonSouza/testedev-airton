import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { NgaModule } from '../../theme/nga.module';
import { PaginatorModule } from 'primeng/paginator';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { DataFilterCorPipe } from "./data-filter-cor.pipe";
import { CoresComponent } from './cores.component';
import { routing } from './cores.routing';
import { NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PaginatorModule,
    routing,
    NgaModule,
    SlimLoadingBarModule.forRoot(),
    NgbTooltipModule,
    NgbModule
  ],
  declarations: [
    CoresComponent,
    DataFilterCorPipe
  ]
})
export class CoresModule {}
