import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing/auth-routing.module';
import {FormsModule} from '@angular/forms';


import { PanierComponent } from './panier/panier.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [PanierComponent, InscriptionComponent]
})
export class AuthModule { }
