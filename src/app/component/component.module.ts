import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ItemComponent } from './item/item.component';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { RenderComponent } from './render/render.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const components = [
  ContainerComponent,
  ItemComponent,
  MainComponent,
  MenuComponent,
  RenderComponent,
  ItemDetailComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [...components],
  providers: []
})
export class ComponentModule { }
