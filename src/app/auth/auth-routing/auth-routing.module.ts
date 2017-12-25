import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import {PanierComponent} from '../panier/panier.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuardService } from '../auth-guard.service';

const authRoutes : Routes = [

{path : 'panier',component : PanierComponent},
{path : 'inscription', component : InscriptionComponent},
{path : 'profil', component : ProfileComponent, canActivate : [AuthGuardService]}
]

@NgModule({
  imports: [ RouterModule.forChild(authRoutes) ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
