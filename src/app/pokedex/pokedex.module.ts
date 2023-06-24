import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex/pokedex.component';
import { SharedModule } from '../shared/shared.module';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';


@NgModule({
  declarations: [
    PokedexComponent,
    PokedexListComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule
  ],
  exports: [
    PokedexComponent
  ]
})
export class PokedexModule { }
