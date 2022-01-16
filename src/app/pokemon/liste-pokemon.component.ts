import {Component} from '@angular/core';
import {Pokemon} from './pokemon';
import {OnInit} from '@angular/core';
import {POKEMONS} from './mock-pokemons'
import {Router} from '@angular/router';
import { PokemonTypeColorPipe} from './pokemon-type-color.pipe';
import {PokemonsService} from './pokemon.service';


@Component({
  selector: 'liste-pokemon',
  templateUrl: './liste-pokemon..component.html',
})
export class ListePokemonComponent {
  pokemons: Pokemon[];
  value: string = '';


  constructor(private router: Router, private pokemonsService: PokemonsService) {
  }

  ngOnInit() {
    this.pokemons = POKEMONS
    console.log(this.pokemons)
    console.log(this.pokemons[0])


  }
  getPokemons(): void {
    this.pokemonsService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons)
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon' + '/' + pokemon.id]
    this.router.navigate(link);
  }
}
