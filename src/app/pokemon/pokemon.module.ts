import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {RouterModule} from "@angular/router";
import {PokemonRoutingModule} from "./pokemon-routing.module";



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
