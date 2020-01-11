import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { PagesBase } from '../../pages.base';
import { CorService, LoaderService } from '../../../services';
import { Cor } from '../../../model';
import { Confirm } from '../../../theme/components/baConfirm/baConfirm.component';

@Component({
  selector: 'formcor',
  templateUrl: './formcor.html',
  styleUrls: ['./formcor.scss']
})
export class FormCorComponent extends PagesBase implements OnInit {
  
    id: any;
    
    form: FormGroup;
    submitted: boolean = false;
    cor: Cor;
    acao: any = "Nova cor";
    camposObrigatorios = {
        'nome': ['', Validators.compose([Validators.required])],
    }

    constructor(fb: FormBuilder,
        public slimLoader: SlimLoadingBarService,
        public modalService: NgbModal,
        public corService: CorService,
        public router: Router,        
        private loaderService: LoaderService,
        private location: Location,
        private activatedRoute: ActivatedRoute) {
        super(slimLoader, modalService, router);
        let fields = {
          'nome': [''],
        };
        Object.assign(fields, this.camposObrigatorios);
        this.form = fb.group(fields);
    }

    ngOnInit() {
        this.cor = new Cor();
        this.activatedRoute.params.subscribe(params => {
            let id: number = 0;
            let param = params['id'];
            if (param.indexOf("_") == -1) {
                id = params['id'];
            }
            
            if (id && id > 0) {
                this.loaderService.display(true);
                this.corService.visualizarDetalhes(id).subscribe((cor: any) => {
                    if (cor.success) {
                        this.cor = cor.response;
                        this.acao = "Editar cor";
                    }
                    this.loaderService.display(false);
                }, (error) => {
                    console.log(error);
                    this.loaderService.display(false);
                    this.errorWithSubContent(error);
                });
            }
        }, (error) => {
            console.log(error);
            this.loaderService.display(false);
          });
    }

    voltar() {
      this.location.back();
    }

    salvar() {
      this.onSubmit(this.form.value);
    }

    public onSubmit(values: Object): void {
        this.submitted = true;
        if (this.form.valid) {
          if (this.cor.nome == '') {
            this.staticModalShow("Atenção", "Informe o nome cor.");
          } else {
            this.salvarCor(values);
          }
        }
    }

    salvarCor(values) {
        this.loaderService.display(true);
        this.corService.salvar(this.cor).subscribe((result: any) => {
            this.loaderService.display(false);
            this.processando = false;
            this.finalizarProcesso();           
        }, (error) => {
            console.log(error);
            this.loaderService.display(false);
            let message;
            let status;
            this.processando = false;
            try {
              let body = error["error"];
              message = body.message;
              status = body.status;
            } catch (ex) {
              message = error._body;
            }
            this.staticModalShow("Atenção", message);
        });
    }

    confirm() {
        const activeModal = this.modalService.open(Confirm, { size: 'sm' });
        activeModal.componentInstance.modalHeader = "Sucesso!";
        activeModal.componentInstance.modalMessage1 = "Cadastro realizado com sucesso!";
        activeModal.componentInstance.modalMessage2 = "Deseja cadastrar uma nova cor?";
        activeModal.result.then((dados) => {
          if (dados) {
            if (dados.result) {
              this.router.navigate(['/pages/formcor', 0]);
            } else {
              this.router.navigate(['/pages/cores']);
            }
          }
        }, (reason) => {
          // on dismiss
          console.log("Cancelou");
        });
    }

    finalizarProcesso() {
        let id = this.cor.id;
        if (!id || id == 0) {
          this.cor = new Cor();
          this.confirm();
        } else {
          this.staticModalShow("Atenção", "Dados atualizados com sucesso!");
          this.router.navigate(['/pages/cores']);
        }
    }
}