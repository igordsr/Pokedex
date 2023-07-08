import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonByNamePipe'
})
export class FilterPokemonByNamePipePipe implements PipeTransform {

  transform(pokemons: any, pokemonName: string): any {
    pokemonName = pokemonName.trim().toLowerCase();
    if(pokemonName){
      pokemons =  pokemons.filter((pokemon:any) => pokemon.name.toLowerCase().includes(pokemonName))
    }
    return pokemons;
  }

}
