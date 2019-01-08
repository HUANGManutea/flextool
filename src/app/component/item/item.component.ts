import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DisplayComponent } from 'src/app/model/display-component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent extends DisplayComponent implements OnInit {
  @Input() 
  fxFlex: string = 'grow';
  @Input() 
  fxLayout: string = 'row';
  @Input() 
  fxLayoutAlign: string = 'start center';
  @Input() 
  fxLayoutGap: string = '0px';

  constructor() {super('item')}

  ngOnInit() {
  }

}
