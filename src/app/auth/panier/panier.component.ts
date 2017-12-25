import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Livre } from '../../../modele/livre';
import { forEach } from '@angular/router/src/utils/collection';
import { User } from '../../../modele/User';
import { LivreDataService } from '../../livres/livres/livre-data.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


livres : Livre[];


  constructor(private router : Router, private data : LivreDataService) { }

  ngOnInit() {


    
    this.livres = JSON.parse(localStorage.getItem("livres"));


    if(this.livres == null)
    this.livres = new Array<Livre>();

  }


  commander() : void{


    let u = this.getCurrentUser();

    for(let i=0;i<this.livres.length;i++){

      u.livres.push(this.livres[i].titre);

    }


    


    let k = this.livres.filter(l => {

      return l.choixPhysique;

    });


    this.data.command(k).subscribe(


      d => {


        this.data.commandHistorique(this.livres).subscribe(

          (d) => console.log("yes"),
          (e) => console.log(e)
    
    
        );

      },
      er => console.log(er),
      ()=> {


        localStorage.removeItem("livres");
        this.router.navigate(['/accueil']);

      }


    );

  }




  getCurrentUser() : User{
    
    
      let u = JSON.parse(localStorage.getItem("user"));
    
      return u
    
    }
    


  total() : number{

   let result : number = 0;

   for(let l of this.livres){

    if(l.choixPhysique)
    result += l.prixPhysique * l.quantity;
    else
    result += l.prixElectronique * l.quantity;

   }

   return result;
  }



  chanageQuantity(l : Livre,quantity : number) : void {



    this.livres.map((livre : Livre) => {


      if(livre == l){

        livre.quantity = quantity;

      }



    });





  }



  removeFromPanier(titre:string, choix : boolean){

  this.livres = this.livres.filter((livre : Livre) => {
  
    if(livre.titre == titre && livre.choixPhysique != choix){
      return true;
    }else if(livre.titre != titre){
      return true;
    }else{
      return false;
    }
  
  });


  localStorage.setItem("livres",JSON.stringify(this.livres));

  this.router.navigate(['panier']);


  }


}
