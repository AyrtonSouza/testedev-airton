import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgaModule } from '../../../theme/nga.module';

@Component({
  selector: 'modal-mensagem',
  styleUrls: [('./modal-mensagem.component.scss')],
  templateUrl: './modal-mensagem.component.html'
})

export class ModalMensagem implements OnInit {

  modalHeader: string = "Enviar mensagem";
  titleButton: string = "Enviar";
  mensagem: any = "";

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {

  }

  closeModal() {
    this.activeModal.close(this.mensagem);
  }

  cancelar() {
    this.activeModal.close();
  }  

  setValor(valor){
    this.mensagem += valor.target.value;
  }
}
