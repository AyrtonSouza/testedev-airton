import {Component, Input} from '@angular/core';

@Component({
  selector: 'ba-card',
  templateUrl: './baCard.html',
})
export class BaCard {
  @Input() title:any;
  @Input() titlePrincipal:any ;
  @Input() baCardClass:String;
  @Input() cardType:String;
}
