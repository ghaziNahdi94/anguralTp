import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {LivreComponent} from '../livre/livre.component';
import {TypeComponent} from '../type/type.component';
import {TypesComponent} from '../types/types.component';
import {LivresComponent} from '../livres/livres.component';
import { DetailsComponent } from '../details/details.component';




const livresRoutes : Routes = [
{path : "livres/:name/:genre", component : LivresComponent},
{path : "details/:name" , component : DetailsComponent},
{path : "accueil", component : TypesComponent},
]


@NgModule({
  imports: [
    RouterModule.forChild(livresRoutes)
  ],
  exports: [RouterModule]
})
export class LivresRoutingModule { }
