import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ok } from 'assert';
import { LivreDataService } from '../../livres/livres/livre-data.service';
import { User } from '../../../modele/User';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers : [LivreDataService]
})
export class InscriptionComponent implements OnInit {


 

  user = new User("","","","","");
  psw2:string = "";
  exist:boolean = false;

  constructor(private livreService : LivreDataService, private router : Router) { }

  ngOnInit() {


  

      

  }


 

onChange(f){

console.log(f[0].name);

}


resetFiled() : void{

this.user.email = "";
this.user.password = "";
this.psw2 = "";

}

onSubmit() : void{


  if(this.user.nom != "" && this.user.prenom != "" && this.user.email != "" && this.user.password != "" && this.user.address != "" && this.psw2 != ""){
    
      this.livreService.addUser(this.user).subscribe(

        data => {
          this.exist = !data.ok ; this.resetFiled();
        
          if(data.ok){

            
            this.router.navigate(['/accueil']);

          }

        },

        er => console.log(er)

      );
  }


}



emailChange() : void{

  this.exist = false;

}


}
