import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {


  constructor(private httpClient: HttpClient) {

  }

  get getAllPokemons():Observable<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100`).pipe(
      tap( res => {
        res.results.map( (resPokemons: any) => {
          this.getPokemon(resPokemons.url).subscribe(
            res => resPokemons.details = {...res}
          );
        })
      })
    )
  }

  private getPokemon(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(map(
      response => response
    ));
  }
}
