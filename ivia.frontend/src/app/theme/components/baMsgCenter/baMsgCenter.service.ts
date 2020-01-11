import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class BaMsgCenterService {
  TesteDev = JSON.parse(localStorage.getItem('TesteDev'));

  constructor(private http: HttpClient) {
  }

  private _notifications = [
    {
      image: 'assets/img/house.png',
      text: 'O anúncio do imóvel de código 4789 irá expirar em 5 dias.',
      time: '10/09/2017'
    },
    {
      image: 'assets/img/pagamento.png',
      text: 'A parcela do mês de setembro irá vencer em 4 dias.',
      time: '10/09/2017'
    }
  ];

  private _messages = [
    {
      name: 'Nasta',
      text: 'After you get up and running, you can place Font Awesome icons just about...',
      time: '1 min ago'
    },
    {
      name: 'Vlad',
      text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
      time: '2 hrs ago'
    },
    {
      name: 'Kostya',
      text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
      time: '10 hrs ago'
    },
    {
      name: 'Andrey',
      text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
      time: '1 day ago'
    },
    {
      name: 'Nasta',
      text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
      time: '1 day ago'
    },
    {
      name: 'Kostya',
      text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
      time: '2 days ago'
    },
    {
      name: 'Vlad',
      text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
      time: '1 week ago'
    }
  ];

  public getMessages(): Array<Object> {
    return this._messages;
  }
}
