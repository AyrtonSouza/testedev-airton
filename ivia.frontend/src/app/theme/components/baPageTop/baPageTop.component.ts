import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '../../../global.state';
import { environment } from 'environments/environment';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {


  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile: any = {
    picture1: this.defaultPicture,
    nome: "",
    email: "",
    creci: ""
  };

  TesteDev : any;

  constructor(private _state: GlobalState, private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    this.TesteDev = JSON.parse(localStorage.getItem('TesteDev'));

    this._state.subscribe('refresh.pessoa', (pessoa) => {
      this.atualizarPessoa(pessoa);     
    });
  }

  atualizarPessoa(pessoa){
    localStorage.removeItem("TesteDev");
    localStorage.setItem("TesteDev", JSON.stringify(pessoa));
    this.TesteDev = pessoa;
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public logout() {
    this.router.navigate(["login"]);
     return false;
  }
}
