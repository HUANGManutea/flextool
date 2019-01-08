import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from 'src/app/model/display-component';
import { ItemComponent } from '../item/item.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items: DisplayComponent[];

  constructor() {
    this.items = [];
    this.items.push(new ItemComponent());
  }

  ngOnInit() {
  }

  public drop(event: CdkDragDrop<string[]>) {

  }

}
