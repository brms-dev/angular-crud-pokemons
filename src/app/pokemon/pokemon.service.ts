import {Injectable} from '@angular/core';
import {Pokemon} from './pokemon';
import {POKEMONS} from './mock-pokemons';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap, map, Observable, of} from 'rxjs';


@Injectable()
export class PokemonsService {
  constructor(private http: HttpClient) {

  }

  private pokemonUrl = 'api/pokemons'

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`$(peration) failed: $(error.message)`)
      return of(result as T);
    };
  }

  // Retourne tous les pokémons
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(x => this.log(`fetched pokemon`)),
      catchError(this.handleError(`getPokemons`, []))
    );
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`
    return this.http.get<Pokemon>(url).pipe
    (tap(x => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`)))
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.put(this.pokemonUrl, pokemon, httpOptions).pipe(
      tap(x => this.log(`ùpdated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }

  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol']
  }
  searchPokemons(term: string): Observable<Pokemon[]> {
  if(!term.trim()) {
    return of([]);
  }
  return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(
    tap(x => this.log(`found pokemons matching "${term}"`)),
    catchError(this.handleError<Pokemon[]>('searchPokemons', []))
  )
  }

  deletPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(x => this.log(`Deleted pokemon id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    )
  }
}
