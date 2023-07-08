import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { FilterPokemonByNamePipePipe } from './pipes/filter-pokemon-by-name.pipe.pipe';
import { ResearchFieldComponent } from './research-field/research-field.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    CardComponent,
    ResearchFieldComponent,
    FilterPokemonByNamePipePipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    CardComponent,
    ResearchFieldComponent,
    FilterPokemonByNamePipePipe,
  ]
})
export class SharedModule { }
