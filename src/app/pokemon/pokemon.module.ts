import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {BorderCardDirective} from './border-card.directive';
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe';
import {ListePokemonComponent} from './liste-pokemon.component';
import  {PokemonRoutingModule} from './pokemon-routing.module'
import {PokemonsService} from './pokemon.service';
import {PokemonFormComponent} from './pokemon-form.component';
import {FormsModule} from '@angular/forms';
import {EditPokemonComponent} from '../edit-pokemon.component';
import {PokemonSearchComponent} from './search-pokemon.component';
import {LoaderComponent} from '../loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,


  ],
  declarations: [
    ListePokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    PokemonSearchComponent,
    LoaderComponent



  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
