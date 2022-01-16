import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Pokemon} from '../pokemon';
import {PokemonsService} from '../pokemon.service';




@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})

export class DetailPokemonComponent implements OnInit {


  pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonsService) {
    let id = +this.route.snapshot.params['id'];
     this.pokemonService.getPokemon(id)
       .subscribe(pokemon => this.pokemon = pokemon)
    console.log(this.pokemon);
  }

  ngOnInit(): void {

  }

delet(pokemon: Pokemon): void {
    this.pokemonService.deletPokemon(pokemon)
      .subscribe( x => this.goBack())
}
  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
  goEdit(pokemon: Pokemon): void {
    let link = ['/pokemon/edit', pokemon.id]
    this.router.navigate(link);
  }
}
