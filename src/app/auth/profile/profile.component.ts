import { Component, OnInit } from '@angular/core';
import { User } from '../../../modele/User';
import { LivreDataService } from '../../livres/livres/livre-data.service';
import { Livre } from '../../../modele/livre';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  url:string;

  livres:Livre[] = new Array<Livre>();


  constructor(private data:LivreDataService) { }

  ngOnInit() {

    this.livres = new Array<Livre>();

    this.url = this.getCurrentUser().image;

   
    let all:Livre[] = JSON.parse(localStorage.getItem("ls"));


    

    this.data.getLivresByEmail(this.getCurrentUser().email).subscribe(


      (datas:any[]) => {


       
      
        for(let a of all){

          for(let d of datas){

            if(d == a.titre)
            this.livres.push(a);

          }

          
        }


            for(let l of this.livres)
            console.log(l.titre);
      }

    );


  }


  showImages():boolean{

    console.log(this.livres.length);
    return !this.showAucun();

  }
  showAucun():boolean{

    console.log(this.livres.length);

    if(this.livres.length == 0)
    return true;
    else
    return false;

  }

  getCurrentUser() : User{


    let u = JSON.parse(localStorage.getItem("user"));
  
    return u
  
  }


}
