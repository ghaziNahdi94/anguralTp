import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { User } from '../../modele/User';

@Injectable()
export class AuthGuardService implements CanActivate{



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    let url:string = state.url;


    if(this.getCurrentUser() != null)
    {

      return true;
    }
    else{
      this.router.navigate(['/accueil']);
      return false;
    }

  }

  constructor(private router:Router) { }



  getCurrentUser() : User{


    let u = JSON.parse(localStorage.getItem("user"));
  
    return u
  
  }
}
