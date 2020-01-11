import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PagesBase } from '../pages.base';

declare var jQuery: any;

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard extends PagesBase implements OnInit {


  constructor(public router: Router,
              public slimLoader: SlimLoadingBarService,
              public modalService: NgbModal) {
    super(slimLoader, modalService, router);

    jQuery('.page-top').addClass("page-top-home");
    jQuery('.al-sidebar').addClass("al-sidebar-home");
  }

  ngOnInit() {

  }

  onChange() {
    //console.log(this.optionsModel);
  }

  myOnFinish(values) {
  
  }
}
