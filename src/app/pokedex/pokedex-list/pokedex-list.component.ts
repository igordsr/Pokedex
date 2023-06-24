import { Component, OnInit } from '@angular/core';
import { PokedexService } from './../../util/index';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit{

  public pokemons!:ReadonlyArray<any>;

  constructor(private pokedexService:PokedexService){

  }

  ngOnInit(): void {
    this.pokedexService.getAllPokemons.subscribe(pokemons =>{
      this.pokemons = pokemons.results;
      console.log(pokemons);
    })
  }

}
