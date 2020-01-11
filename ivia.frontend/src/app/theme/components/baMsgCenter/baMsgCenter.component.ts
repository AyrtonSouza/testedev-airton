import { Component, OnInit } from '@angular/core';
import { BaMsgCenterService } from './baMsgCenter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html'
})
export class BaMsgCenter implements OnInit {
  notifications: any = [];
  chats: any = [];
  mensagens: any = [];

  timeLeft: number = 60;
  interval;

  constructor(
    private _baMsgCenterService: BaMsgCenterService,
    public router: Router,
  ) {

  }

  ngOnInit() {

  }

  sortOn(collection, name) {
    collection.sort(function (a, b) {
      if (a[name] <= b[name]) {
        return (1);
      }
      return (-1);
    });
  }

  abrirChat(item) {

  }
}
