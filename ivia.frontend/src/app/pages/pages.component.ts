import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { environment } from 'environments/environment';
import { LoaderService } from '../services';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">
        <!--<i class="ion-heart"></i>-->
      </div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">
          <ul class="al-share clearfix">
            <li>
              &copy; <a href="#">TesteDev</a> - v: `+ environment.version + `
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    <span *ngIf="showLoader" class="loading"></span>
    <div *ngIf="showLoader && msgLoader" class="loading-content">
      <span class="loading-msg">{{msgLoader}}</span>
    </div>

    `
})
export class Pages {
  TesteDev: any;
  showLoader: boolean;
  msgLoader: string = "";

  constructor(private _menuService: BaMenuService, private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });

    this.loaderService.msg.subscribe((msg: string) => {
      this.msgLoader = msg;
    });

    this.TesteDev = JSON.parse(localStorage.getItem('TesteDev'));
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
