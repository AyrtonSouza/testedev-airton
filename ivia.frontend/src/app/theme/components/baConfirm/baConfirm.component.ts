import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgaModule } from '../../nga.module';

@Component({
  selector: 'baConfirm',
  styleUrls: [('./baConfirm.scss')],
  templateUrl: './baConfirm.html'
})

export class Confirm implements OnInit {

  modalHeader: string;
  modalMessage1: string;
  modalMessage2: string;
  modalMessage3: string;
  labelButtonTrue: string = "Sim";
  labelButtonFalse: string = "Não";

  constructor(private activeModal: NgbActiveModal) {
    
  }

  ngOnInit() {

  }

  closeModal(result) {
    this.activeModal.close(result);
  } 
}
