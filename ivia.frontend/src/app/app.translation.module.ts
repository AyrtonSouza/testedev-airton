import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateService } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
    //return new TranslateHttpLoader(http, './assets/i18n/US/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/BR/', '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
};

@NgModule({
  imports: [TranslateModule.forRoot(translationOptions)],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class AppTranslationModule {
  constructor(private translate: TranslateService) {
    /*
    translate.addLangs(["en"]);
    translate.setDefaultLang('en');
    translate.use('en');
    */

    translate.addLangs(["pt"]);
    translate.setDefaultLang('pt');
    translate.use('pt');
  }
}
