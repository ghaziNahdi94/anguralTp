import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { trigger, style, animate, transition,state } from '@angular/animations';

import { LivreDataService } from './livres/livres/livre-data.service';
import { User } from '../modele/User';
import { ResponseContentType } from '@angular/http/src/enums';
import { Livre } from '../modele/livre';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        width : '800px'
      })),
      state('out', style({
        width : '100px'
      })),
      transition('in => out', animate('1300ms ease-in-out')),
      transition('out => in', animate('1300ms ease-in-out'))
    ])
  ],
  providers : [LivreDataService]
})



export class AppComponent implements OnInit{


user:User;
livres : Array<Livre>;


private state : string = "out";

private homeLinkState = "active";
private contactLinkState = "";
private aboutLinkState = "";



private panier:number = 0;


private connectionError:string = "";
private afficheError:boolean = false; 


constructor(private router : Router, private dataService : LivreDataService){}


ngOnInit(): void {

  this.state = "out";
  this.homeLinkState = "active";
  this.contactLinkState = "";

  this.user = JSON.parse(localStorage.getItem("user"));


  
}


getCurrentUser() : User{


  let u = JSON.parse(localStorage.getItem("user"));

  return u

}


getPanierLength() : number{

  this.livres = JSON.parse(localStorage.getItem("livres"));

if(this.livres == null)
this.livres = new Array<Livre>();

  return this.livres.length;


}


logout() : void{


localStorage.removeItem("user");
this.router.navigate(['/accueil']);

}



private bigger() : void{

this.state = "in";

}


private smaller(texte : string) : void{

 
  if(texte == "")
  this.state = "out";
  

}


private goHome(){
  localStorage.setItem("affiche","a");
  this.contactLinkState = ""
  this.aboutLinkState = "";
  this.homeLinkState = "active";
}


private goContact(){
  localStorage.setItem("affiche","a");  
this.contactLinkState = "active"
this.homeLinkState = "";
this.aboutLinkState = "";
window.location.hash = "rout";
}



private goApropos(){
  localStorage.setItem("affiche","a"); 
  this.contactLinkState = ""
  this.homeLinkState = "";
  this.aboutLinkState = "active";
  window.location.hash = "rout";
  }



goToPanier(){

localStorage.removeItem("affiche");
this.homeLinkState = "";

}

getAffiche(): boolean{


let l = localStorage.getItem("affiche");

if(l != null)
return true;
else return false;


}


goInscription(){


  localStorage.removeItem("affiche");
  

  
}


private searchChanged(val : string){


  if(val == ""){
    localStorage.setItem("affiche","a"); 
    this.router.navigate(['/accueil']);
  }


}


private serachEnterPressed(val : string){

  if(val != "")
  localStorage.removeItem("affiche");
  


 
  this.router.navigate(['/livres',val,""]);
  
  

}







goConnect(email:string,password:string) : void{


  this.dataService.connect(email,password).subscribe(


    (data:ReponseConnection) => {


      if(data.goodEmail == true){

        
        if(data.goodPassword == true){


            localStorage.setItem("user",JSON.stringify(data.user));
            this.afficheError = false;

            $("#myModal").modal("hide");
            $("#email").val("");
            $("#password").val("");



        }else{

            this.connectionError = "Le mot de passe est incorrecte"
            this.afficheError = true;

        }


      }else{

        this.connectionError = "Cet email n'existe pas"
        this.afficheError = true;

      }


    },
    er => console.log(er)



  );


}




}



class ReponseConnection{


user:User;
goodEmail:boolean;
goodPassword:boolean;



}