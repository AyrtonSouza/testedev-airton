import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { DefaultModal } from './ui/components/modals/default-modal/default-modal.component';
import { ModalMensagem } from './dashboard/modal-mensagem/modal-mensagem.component';
import { Confirm } from '../theme/components/baConfirm/baConfirm.component';

import { NgbDropdownModule, NgbModalModule, NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Pages } from './pages.component';
import { ToastyModule } from 'ng2-toasty';
import { Options } from '../theme/components/baOptions/baOptions.component';
import { I18n, CustomDatepickerI18n } from 'app/theme/pipes/datesPickers/CustomDatepickerI18n';
import { NgbDatePTParserFormatter } from 'app/theme/pipes/datesPickers/NgbDatePTParserFormatter';
import { Motive } from 'app/theme/components/baMotive/baMotive.component';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    NgbDropdownModule,
    NgbModalModule,
    ToastyModule.forRoot()
  ],
  declarations: [Pages, DefaultModal, ModalMensagem, Confirm, Options, Motive],
  entryComponents: [
    DefaultModal, ModalMensagem, Confirm, Options, Motive
  ],
  providers: [
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
    [{ provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter }],
  ]
})
export class PagesModule {
}
