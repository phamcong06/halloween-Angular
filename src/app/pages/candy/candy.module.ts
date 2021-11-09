import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandyRoutingModule } from './candy-routing.module';
import { CandyComponent } from './candy.component';


@NgModule({
  declarations: [
    CandyComponent
  ],
  imports: [
    CommonModule,
    CandyRoutingModule
  ]
})
export class CandyModule { }
