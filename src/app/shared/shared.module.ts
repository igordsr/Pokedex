import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
