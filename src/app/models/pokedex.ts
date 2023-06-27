import { PokedexTemplat } from "../interfaces/pokedex-templat";

export class Pokedex implements PokedexTemplat{

  constructor(private _count: number, private _next: string, private _previous: any, private _results: Array<any>){

  }

  public get count(): number {
    return this._count;
  }
  public set count(value: number) {
    this._count = value;
  }

  public get next(): string {
    return this._next;
  }
  public set next(value: string) {
    this._next = value;
  }

  public get previous(): any {
    return this._previous;
  }
  public set previous(value: any) {
    this._previous = value;
  }

  public get results(): Array<any> {
    return this._results;
  }
  public set results(value: Array<any>) {
    this._results = value;
  }
}
