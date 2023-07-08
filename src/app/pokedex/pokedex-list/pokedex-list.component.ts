import { Component, OnInit } from '@angular/core';
import { ItemsPerPage, PokedexService } from './../../util/index';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {
  public filter:string = '';
  public pokemons!: any;
  public pagination: number = 1;
  public itemsPerPage:number = ItemsPerPage.HUNDRED;
  public itemsPerPageOptions!:any;
  public enumKeys = Object.keys(ItemsPerPage).filter(f => !isNaN(Number(f)));;
  private offset:number = 0;

  constructor(private pokedexService: PokedexService) {

  }

  ngOnInit(): void {
    this.getPokemons(this.offset, this.itemsPerPage);
  }

  public renderPage(event: number):void {
    this.filter = '';
    this.pagination = event;
    this.getPokemons(this.itemsPerPage* (this.pagination-1), this.itemsPerPage);
  }

  public onChange(event:Event):void{
    this.itemsPerPage = +(event.target as HTMLInputElement).value;
    this.getPokemons(this.itemsPerPage* (this.pagination-1), this.itemsPerPage);
  }

  private getPokemons(offset:number, limitnumber:number):void{
    this.pokedexService.getAllPokemons(offset, limitnumber).subscribe(pokemons => {
      this.pokemons = pokemons;
    })
  }
}
