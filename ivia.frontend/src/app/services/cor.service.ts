import { Cor } from './../model/cor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CorTO } from '../to';
import { environment } from 'environments/environment';

@Injectable()
export class CorService {
  constructor(private http: HttpClient) {
  }

  salvar(cor: Cor) {
    if (cor.id && cor.id > 0) {
      return this.http.put(`${environment.base_api.produto}cor/alterar/${cor.id}`, cor, { headers: this.recuperarOptionsHeaders() });
    } else {
      return this.http.post(`${environment.base_api.produto}cor/incluir`, cor, { headers: this.recuperarOptionsHeaders() });
    }
  }

  visualizarDetalhes(id: number) {
    return this.http.get(`${environment.base_api.produto}cor/visualizardetalhes/${id}`, { headers: this.recuperarOptionsHeaders() });
  }

  visualizarListagem(corTO: CorTO) {
    console.log(JSON.stringify(corTO));
    return this.http.post(`${environment.base_api.produto}cor/visualizarlistagem`, corTO, { headers: this.recuperarOptionsHeaders() });
  }

  excluir(id: number) {
    return this.http.delete(`${environment.base_api.produto}cor/delete/${id}`, { headers: this.recuperarOptionsHeaders() });
  }

  recuperarOptionsHeaders() {
    const TesteDev = JSON.parse(localStorage.getItem('TesteDev'));
    const options = new HttpHeaders().set('Content-Type', 'application/json');
    return options;
  }
}
