import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {


  constructor(private httpClient: HttpClient) {

  }

  public getAllPokemons(offset:number, limitnumber:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.pokeApiUrl}/pokemon/?offset=${offset}&limit=${limitnumber}`).pipe(
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
