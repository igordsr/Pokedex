import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Pokedex } from '../../models/pokedex';
import { PokedexService } from '../../util';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiResolverService implements Resolve<Observable<Pokedex[]>>{

  constructor(private pokedexService: PokedexService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokedex[]> | Observable<Observable<Pokedex[]>> | Promise<Observable<Pokedex[]>> {
    throw new Error('Method not implemented.');
  }
}
