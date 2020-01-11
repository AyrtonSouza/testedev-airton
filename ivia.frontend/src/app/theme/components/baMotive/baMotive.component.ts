import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'baMotive',
    styleUrls: [('./baMotive.scss')],
    templateUrl: './baMotive.html'
})
export class Motive implements OnInit {
    modalTitle: string = "Titulo";

    enumType: any;
    objectText = 'description';
    objectReturn = 'id';
    labelOption1: string = "Option1";
    descriptionOption1: string;
    descriptionOption2: string;
    options1: any = [];
    value1: any;
    labelOption2: string = "Option2";
    descriptionOption: string;
    options2: any = [];
    value2: any;

    hasNote: boolean = false;
    noteTitle: string = "Note";
    note: string = "";

    labelButtonTrue: string = "Confirmar";
    labelButtonFalse: string = "Cancelar";
    warning: Boolean = false;

    constructor(private activeModal: NgbActiveModal) {

    }

    ngOnInit() {

    }

    closeModal(result) {
        if (result) {
            if (result.result) {
                if (this.note != "") {                    
                    result.note = this.note;
                    this.activeModal.close(result);                    
                } else {
                    this.warning = true;
                    result = false;
                }
            } else {
                this.activeModal.close(result);
            }
        } else {
            this.activeModal.close(result);
        }
    }

    changeOption1(value: any) {
        this.value1 = value;
    }

    changeOption2(value: any) {
        this.value2 = value;
    }

    onKey(value: any) {
        this.note = value;
    }
}