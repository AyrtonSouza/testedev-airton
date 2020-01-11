import { CorTO } from './../../to/corTO';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesBase } from '../pages.base';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CorService, LoaderService } from '../../services';
import { Cor } from '../../model';
import { Confirm } from "../../theme/components/baConfirm/baConfirm.component";
import { Paginator } from 'primeng/paginator';

@Component({
	selector: 'cores',
	templateUrl: './cores.html',
	styleUrls: ['./cores.scss']
})

export class CoresComponent extends PagesBase implements OnInit {

	@ViewChild('p') paginator: Paginator;

    data: Cor[];
    filterQuery = "";
	rowsOnPage = 10;
	sortBy = "id";
	sortOrder = "desc";
	
	pageNumber: number = 1;
	pageSize: number = 10;
	totalElements: number = 0;
    
    corTO: CorTO;

    constructor(public slimLoader: SlimLoadingBarService,
		public router: Router,
		private corService: CorService,
		private loaderService: LoaderService,
		public modalService: NgbModal) {
        super(null, modalService, router);    
	}
	
	ngOnInit() {
		this.corTO = new CorTO();
		this.filtroVisivel = false;
		this.recuperarCores(null);
	}
    
    recuperarCores(event) {
        this.loaderService.display(true);
        this.data = [];
        this.processando = true;
		this.filtrado = true;
		
		this.corTO.pageNumber = this.pageNumber;
		this.corTO.pageSize = this.pageSize;
		this.corTO.direction = "DESC"
		this.corTO.by = ["id"];
		this.corService.visualizarListagem(this.corTO).subscribe((result: any) => {
			if (result["success"]) {
				this.totalElements = result["numberOfElements"]
				for (let item of result["response"]) {
					this.data.push(item);
				}
			}

			if(result["numberOfElements"] > 0 && this.data.length <= 0) {
				this.pageNumber = 1;				
				this.paginator.changePageToFirst(event);
			} else {
				this.loaderService.display(false);
				this.processando = false;
			}
			
			this.loaderService.display(false);
			this.processando = false;
			
		}, (error) => {
			console.log(error);
			this.errorWithSubContent(error);
		});
	}

	novaCor() {
		this.router.navigate(['/pages/formcor', 0]);
	}

	paginate(event) {
		this.pageNumber = event.page + 1;
		this.pageSize = event.rows;
		this.recuperarCores(event);
    }
	
	limpar() {
		this.corTO = new CorTO();
	}

	abrirFormEdicao(item) {
		this.router.navigate(['/pages/formcor', item.id]);
	}
}