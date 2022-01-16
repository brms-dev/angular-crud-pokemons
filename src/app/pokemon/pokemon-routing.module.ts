import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListePokemonComponent} from './liste-pokemon.component';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {EditPokemonComponent} from '../edit-pokemon.component';


// les routes du module Pokémon
const pokemonsRoutes: Routes = [
  {path: 'pokemons', component: ListePokemonComponent},
  {path: 'pokemon/edit/:id', component: EditPokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule {
}
