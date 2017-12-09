import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {LivresRoutingModule} from './livres-routing/livres-routing.module';
import { LivreComponent } from './livre/livre.component';
import { TypeComponent } from './type/type.component';
import { TypesComponent } from './types/types.component';
import { TypeColorDirective } from './type-color.directive';
import { LivresComponent } from './livres/livres.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LivresRoutingModule
  ],
  declarations: [LivreComponent, TypeComponent, TypesComponent, TypeColorDirective, LivresComponent, DetailsComponent]
})
export class LivresModule { }
