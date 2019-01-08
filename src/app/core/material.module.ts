import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule, MatButtonModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
const sharedModules = [
  MatCardModule,
  MatDividerModule,
  MatSidenavModule,
  MatButtonModule,
  DragDropModule
];

@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules]
})
export class MaterialModule { }
