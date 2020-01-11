import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './ui/components/modals/default-modal/default-modal.component';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';

declare var jQuery: any;

export abstract class PagesBase implements OnInit, AfterViewInit {
	TesteDev: any;
	processando: boolean = false;
	maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
	maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
	maskTelefoneFixo = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
	maskTelefone = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
	maskData = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
	maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
	maskProtocolo = [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
	masktempoGasto = [/\d/, /\d/, ':', /\d/, /\d/]
	maskEdital = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
	maskPAB = [/[a-z]/i, /[a-z]/i, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/,]
	maskIncricao = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
	maskCodigoProduto = [/[a-z]/i, /[a-z]/i, /[a-z]/i, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
	maskCodigoEtiqueta = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
	filtrado: boolean = false;
	filtroVisivel: boolean = true;

	constructor(public slimLoader: SlimLoadingBarService,
		public modalService: NgbModal,
		public router: Router) {
		this.TesteDev = JSON.parse(localStorage.getItem('TesteDev'));

		jQuery('.page-top').removeClass("page-top-home");
		jQuery('.al-sidebar').removeClass("al-sidebar-home");

	}

	ngOnInit() {

	}

	ngAfterViewInit() {

	}

	public loading(type: string) {
		this.slimLoader.height = '4px';
		this.slimLoader.color = 'white';

		if (type == "show") {
			this.processando = true;
			this.slimLoader.start(() => {
				this.processando = false;
				console.log('Loading complete');
			});
		} else if (type == "hide") {
			this.processando = false;
			this.slimLoader.complete();
		}
	}

	staticModalShow(titulo, content) {
		const activeModal = this.modalService.open(DefaultModal, {
			size: 'sm',
			backdrop: 'static'
		});
		activeModal.componentInstance.modalHeader = titulo;
		if (content) {
			activeModal.componentInstance.modalContent = content;
		}
		else {
			activeModal.componentInstance.modalContent = "Falha na Execução!"
		}
		activeModal.componentInstance.titleButton = "OK";
	}

	staticModalShowWithSubContent(titulo, content, subContent) {
		const activeModal = this.modalService.open(DefaultModal, {
			size: 'sm',
			backdrop: 'static'
		});
		activeModal.componentInstance.modalHeader = titulo;
		if (content && subContent) {
			activeModal.componentInstance.modalContent = content;
			activeModal.componentInstance.modalSubContent = subContent;
		} else if (content){
			activeModal.componentInstance.modalContent = content;
		}
		else {
			activeModal.componentInstance.modalContent = "Falha na Execução!"
		}
		activeModal.componentInstance.titleButton = "OK";
	}

	formatBR(pref, valor) {
		var v = valor;
		v = v.replace(/\D/g, '');
		v = v.replace(/(\d{1,2})$/, ',$1');
		v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
		v = v != '' ? pref + v : '';

		return v;
	}

	formatUSD(pref, valor) {
		var v = valor;
		v = v.replace(/\D/g, '');
		v = v.replace(/(\d{1,2})$/, '.$1');
		v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
		v = v != '' ? pref + v : '';

		return v;
	}

	removerAcentos(newStringComAcento) {
		let string = newStringComAcento;
		var mapaAcentosHex = {
			a: /[\xE0-\xE6]/g,
			A: /[\xC0-\xC6]/g,
			e: /[\xE8-\xEB]/g,
			E: /[\xC8-\xCB]/g,
			i: /[\xEC-\xEF]/g,
			I: /[\xCC-\xCF]/g,
			o: /[\xF2-\xF6]/g,
			O: /[\xD2-\xD6]/g,
			u: /[\xF9-\xFC]/g,
			U: /[\xD9-\xDC]/g,
			c: /\xE7/g,
			C: /\xC7/g,
			n: /\xF1/g,
			N: /\xD1/g,
		};
		for (let letra in mapaAcentosHex) {
			let expressaoRegular = mapaAcentosHex[letra];
			string = string.replace(expressaoRegular, letra);
		}
		return string;
	}

	error(error) {
		let message;
		let status;
		let quantdiaatraso;
		let mensagemDesenvolvedor;
		let mensagemUsuario;
		try {
			let body = error["error"];

			if(body.message || body.currentTarget.__zone_symbol__xhrURL){
				this.errorNoBodyMessage(error);
				return;
			}

			message = body.message;
			mensagemDesenvolvedor = body[0].mensagemDesenvolvedor;
			mensagemUsuario = body[0].mensagemUsuario;

			if (body.status) {
				status = body.status;

				if (status == 401) {
					this.logout();
				}
			}

			if (body.quantdiaatraso)
				quantdiaatraso = body.quantdiaatraso;

		} catch (ex) {
			message = error["error"];
			console.log(message)
		}
		this.staticModalShow("Atenção", message);
	}

	errorWithSubContent(error) {
		let message;
		let status;
		let quantdiaatraso;
		let mensagemDesenvolvedor;
		let mensagemUsuario;
		try {
			let body = error["error"];
			if (body.error == "Unauthorized" && body.status && body.status == 401){
				this.errorNoBodyMessage(body);
			} else if(body.message || error["error"].currentTarget.__zone_symbol__xhrURL){
				this.errorNoBodyMessage(error);
				return;
			}

			if (body.quantdiaatraso)
			quantdiaatraso = body.quantdiaatraso;

			message = body.message;
			mensagemDesenvolvedor = body[0] != null && body[0].mensagemDesenvolvedor != null ? body[0].mensagemDesenvolvedor : "";
			mensagemUsuario = body[0] != null && body[0].mensagemUsuario != null ? body[0].mensagemUsuario : undefined;

		} catch (ex) {
			message = error["error"];
			console.log(message)


			if (error["status"] === 403 && error["statusText"] === "Forbidden"){
				this.staticModalShowWithSubContent("Atenção", "Sem permissão para executar a ação!", error.message);
			}
		}

		// if (mensagemUsuario == undefined && message != undefined){
		// 	mensagemUsuario = message[0].mensagemUsuario != null || message[0].mensagemUsuario != undefined ? message[0].mensagemUsuario : message;
		// }

		// if (mensagemDesenvolvedor == undefined && message != undefined){
		// 	mensagemDesenvolvedor = message[0].mensagemDesenvolvedor != null || message[0].mensagemDesenvolvedor != undefined ? message[0].mensagemDesenvolvedor : message;
		// }

		// this.staticModalShowWithSubContent("Atenção", mensagemUsuario, mensagemDesenvolvedor);
	}

	errorNoBodyMessage(error){

		if (error.error == "Unauthorized" && error.status && error.status == 401){

			this.staticModalShow("Ateção", error.message);
			//this.staticModalShowWithSubContent("Atenção", error.message, error.message);
			this.logout();
			
		} else if (error.status === 403 && error.statusText === "Forbidden"){

			this.staticModalShowWithSubContent("Atenção", "Sem permissão para executar a ação!", error.message);

		} else if(error.status == 403){

			this.staticModalShowWithSubContent("Atenção", "Sem permissão para executar a ação!", error.message);

		} else if (error.status == 0 || error.statusText == "Unknown Error"){

			this.staticModalShowWithSubContent("Atenção", "Sem conexão com o servidor do serviço. ", "API Rest está fora ::: " + error.error.currentTarget.__zone_symbol__xhrURL);

		} else if (error.status == 404 && error.error != undefined && error.error.message != undefined){

			this.staticModalShow("Atenção", error.error.message);

		} else if (error.status == 404){

			this.staticModalShowWithSubContent("Atenção", "Mensagem de validação!", error.error.message);

		} else if (error.status == 500){

			this.staticModalShowWithSubContent("Atenção", "Erro no servidor: " + error.status, error.error.path + " - " + error.error.error + " - " + error.error.message);

		}else{

			this.staticModalShowWithSubContent("Atenção", error.message, error.message);
		}
	}

	public logout() {
		this.router.navigate(["login"]);
		return;
	}

	apenasNumeros(string) {
		var numsStr = string.replace(/[^0-9]/g, '');
		return parseInt(numsStr);
	}

	convertDateUTC(UTCDateString) {
		var convertdLocalTime = new Date(UTCDateString);
		var hourOffset = convertdLocalTime.getTimezoneOffset() / 60;
		convertdLocalTime.setHours(convertdLocalTime.getHours() + hourOffset);
		return convertdLocalTime;
	}

	converterDataString1(data) {
		let dataAux = new Date(data);
		return ((dataAux.getDate() < 10) ? "0" : "") + dataAux.getDate() + "/" + (((dataAux.getMonth() + 1) < 10) ? "0" : "") + (dataAux.getMonth() + 1) + "/" + dataAux.getFullYear();
	}

	converterDataString(data) {
		let dataAux = new Date(data);
		return ((dataAux.getDate() < 10) ? "0" : "") + dataAux.getDate() + "/" + (((dataAux.getMonth() + 1) < 10) ? "0" : "") + (dataAux.getMonth() + 1) + "/" + dataAux.getFullYear() + " " + ((dataAux.getHours() < 10) ? "0" : "") + dataAux.getHours() + ":" + ((dataAux.getMinutes() < 10) ? "0" : "") + dataAux.getMinutes();
	}

	getDataAtual() {
		let dataAux = new Date();
		return ((dataAux.getDate() < 10) ? "0" : "") + dataAux.getDate() + "/" + (((dataAux.getMonth() + 1) < 10) ? "0" : "") + (dataAux.getMonth() + 1) + "/" + dataAux.getFullYear() + " " + ((dataAux.getHours() < 10) ? "0" : "") + dataAux.getHours() + ":" + ((dataAux.getMinutes() < 10) ? "0" : "") + dataAux.getMinutes();
	}

	getDateAtual() {
		let dataAux = new Date();
		return ((dataAux.getDate() < 10) ? "0" : "") + dataAux.getDate() + "/" + (((dataAux.getMonth() + 1) < 10) ? "0" : "") + (dataAux.getMonth() + 1) + "/" + dataAux.getFullYear();
	}

	converterStringData(data: string) {
		let dtArray = data.split("/");
		return dtArray[2] + "-" + dtArray[1] + "-" + dtArray[0];
	}

	converterData(dataAux) {
		return ((dataAux.getDate() < 10) ? "0" : "") + dataAux.getDate() + "/" + (((dataAux.getMonth() + 1) < 10) ? "0" : "") + (dataAux.getMonth() + 1) + "/" + dataAux.getFullYear();
	}

	groupBy(array, f) {
		let groups = {};
		array.forEach(function (o) {
			let group = JSON.stringify(f(o));
			groups[group] = groups[group] || [];
			groups[group].push(o);
		});
		return Object.keys(groups).map(function (group) {
			return groups[group];
		})
	}

	dataURItoBlob(dataURI) {
		var byteString;
		if (dataURI.split(',')[0].indexOf('base64') >= 0)
			byteString = atob(dataURI.split(',')[1]);
		else
			byteString = decodeURI(dataURI.split(',')[1]);

		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

		var ia = new Uint8Array(byteString.length);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		return new Blob([ia], { type: mimeString });
	}

	moveCard(tipo) {
		jQuery('html, body').animate({ scrollTop: jQuery('#' + tipo).position().top + 50 }, { duration: 800 });
	}


	validarCpf(cpf: string): boolean {
		if (cpf == null) {
			return false;
		}

		//apenas numeros
		cpf = cpf.replace(/[^0-9]/g, '');

		if (cpf.length != 11) {
			return false;
		}
		if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
			return false;
		}
		let numero: number = 0;
		let caracter: string = '';
		let numeros: string = '0123456789';
		let j: number = 10;
		let somatorio: number = 0;
		let resto: number = 0;
		let digito1: number = 0;
		let digito2: number = 0;
		let cpfAux: string = '';
		cpfAux = cpf.substring(0, 9);
		for (let i: number = 0; i < 9; i++) {
			caracter = cpfAux.charAt(i);
			if (numeros.search(caracter) == -1) {
				return false;
			}
			numero = Number(caracter);
			somatorio = somatorio + (numero * j);
			j--;
		}
		resto = somatorio % 11;
		digito1 = 11 - resto;
		if (digito1 > 9) {
			digito1 = 0;
		}
		j = 11;
		somatorio = 0;
		cpfAux = cpfAux + digito1;
		for (let i: number = 0; i < 10; i++) {
			caracter = cpfAux.charAt(i);
			numero = Number(caracter);
			somatorio = somatorio + (numero * j);
			j--;
		}
		resto = somatorio % 11;
		digito2 = 11 - resto;
		if (digito2 > 9) {
			digito2 = 0;
		}
		cpfAux = cpfAux + digito2;
		if (cpf != cpfAux) {
			return false;
		}
		else {
			return true;
		}
	}



	validarCNPJ(cnpj: String) {
		cnpj = cnpj.replace(/[^\d]+/g, '');
		if (cnpj == '') {
			return false;
		}

		if (cnpj == "00000000000000" ||
			cnpj == "11111111111111" ||
			cnpj == "22222222222222" ||
			cnpj == "33333333333333" ||
			cnpj == "44444444444444" ||
			cnpj == "55555555555555" ||
			cnpj == "66666666666666" ||
			cnpj == "77777777777777" ||
			cnpj == "88888888888888" ||
			cnpj == "99999999999999") {
			return false;
		}

		var tamanho = cnpj.length - 2;
		var numero = cnpj.substring(0, tamanho);
		var digito = cnpj.substring(tamanho);
		var soma = 0;
		var pos = tamanho - 7;

		for (var i = tamanho; i >= 1; i--) {
			soma += parseInt(numero.charAt(tamanho - i)) * pos--;
			if (pos < 2) {
				pos = 9
			};
		}

		var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != parseInt(digito.charAt(0))) {
			return false;
		}

		tamanho = tamanho + 1;
		numero = cnpj.substring(0, tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (var i = tamanho; i >= 1; i--) {
			soma += parseInt(numero.charAt(tamanho - i)) * pos--;
			if (pos < 2) {
				pos = 9;
			}
		}

		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != parseInt(digito.charAt(1))) {
			return false;
		}

		return true;
	}

	ordenar(list, atributo) {
		list.sort(function (a, b) {
			var nameA = a[atributo].toString().toLowerCase(), nameB = b[atributo].toString().toLowerCase()
			if (nameA < nameB)
				return -1
			if (nameA > nameB)
				return 1
			return 0
		})
	}

	leftPad(value, totalWidth, paddingChar) {
		var length = totalWidth - value.toString().length + 1;
		return Array(length).join(paddingChar || '0') + value;
	};

	focar(idinput: string) {
        setTimeout(function () {
            $('#' + idinput).focus();
            $("#" + idinput).select();
        }, 100);
	}
	
	converterHorasMinutos(horasTotal) {
		let totalMinutos = (Number(horasTotal) * 60);
		let horas = Math.trunc(totalMinutos / 60);
		let minutos = Math.trunc(totalMinutos % 60);
		return (horas < 10 ? "0" + horas : horas) + ":" + (minutos == 0 ? "00" : (minutos < 10 ? "0" + minutos : minutos));
	  }
}
