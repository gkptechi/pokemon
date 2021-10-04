import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PokemonComponent} from "./pokemon.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";

const pokemonRoutes = [
  {
    path: '',
    component: PokemonComponent,
    children: [
      {
        path: '', component: PokemonListComponent
      },
      {
        path: 'details', component: PokemonDetailsComponent
      }
    ]
  }
]
@NgModule({
  imports: [ RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule{}
