import {Component, ViewChild, HostListener, Input, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ba-save-top',
  styleUrls: ['./baSaveTop.scss'],
  template: `
    <i #baSaveTop class="fa fa-floppy-o save-top ba-save-top" title="Salvar" (click)="saveComponent()"></i>
  `
})
export class BaSaveTop {

  @Input() position:number = 200;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 1000;

  @Output() save = new EventEmitter();

  @ViewChild('baSaveTop') _selector:ElementRef;

  ngAfterViewInit () {
    this._onWindowScroll();
  }

  saveComponent() {
    this.save.emit();
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
    let el = this._selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }
}
