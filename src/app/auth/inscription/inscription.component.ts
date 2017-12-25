import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { ok } from 'assert';
import { LivreDataService } from '../../livres/livres/livre-data.service';
import { User } from '../../../modele/User';
import { Route } from '@angular/router/src/config';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers : [LivreDataService]
})
export class InscriptionComponent implements OnInit {


 

  user = new User("","","","","","rien");
  psw2:string = "";
  exist:boolean = false;
  file:File;
  private sanitizer: DomSanitizer;

  constructor(private livreService : LivreDataService, private router : Router, private element:ElementRef) { }

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


  if(this.user.nom != "" && this.user.prenom != "" && this.user.email != "" && this.user.password != "" && this.user.address != "" && this.psw2 != "" && this.file != null){
    
      this.livreService.addUser(this.user).subscribe(

        (data:any) => {
          this.exist = !data.ok ; this.resetFiled();
        
          if(data.ok){
            
            this.router.navigate(['\accueil']);

          }

        },

        er => console.log(er)

      );
  }


}



emailChange() : void{

  this.exist = false;

}

annuler(){

  var img = this.element.nativeElement.querySelector('.image');
  img.src = "https://cdn.dribbble.com/users/112117/screenshots/3792149/avatar-dribbble_1x.png";


}

fileChange(event){

  let fileList:FileList = event.target.files;

  this.file = null;
  if(fileList.length > 0){


    this.file = fileList[0];

    let reader:FileReader = new FileReader();

    var img = this.element.nativeElement.querySelector('.image');

    reader.onload = (e: any) => {
      img.src = e.target.result;
      this.user.image = img.src;
    }

      
      

    

    reader.readAsDataURL(this.file);



  }


}



}



class reponse{
  ok:boolean;
}



