import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import {PanierComponent} from '../panier/panier.component';
import { InscriptionComponent } from '../inscription/inscription.component';


const authRoutes : Routes = [

{path : 'panier',component : PanierComponent},
{path : 'inscription', component : InscriptionComponent}

]

@NgModule({
  imports: [ RouterModule.forChild(authRoutes) ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
