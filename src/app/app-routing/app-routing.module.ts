import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ContactComponent} from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';



const appRoutes : Routes = [
{path : "apropos", component : AboutComponent},
{path : "contact",component : ContactComponent},
{path : "", redirectTo:'accueil', pathMatch:"full"}  
];


@NgModule({
  imports: [
RouterModule.forRoot(appRoutes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
