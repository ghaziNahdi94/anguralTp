import { Component, OnInit,Input } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {LivreComponent} from '../livre/livre.component';
import {LivreDataService} from './livre-data.service';
import { Livre } from '../../../modele/livre';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css'],
  providers : [LivreDataService]
})
export class LivresComponent implements OnInit {


 public livres : any[];
 public name : string;
 public genre : string;

 nbrElements = 0;

  constructor(private data : LivreDataService,private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {


 this.route.params.subscribe(params => {this.name = params['name']; this.genre = params['genre']});
    

  this.data.getAllLivres().subscribe(

    (data:any[]) => {
      this.livres = data
      
    }

  );

  

  }


  private getStyleListe() : string{

    if(this.nbrElements == 0)
    return "0px";
    else
    return "455px";

  }

 private getStyleAucun() : string{

  if(this.nbrElements == 0)
  return "block";
  else
  return "none";

 }


  private check(titre : string, genre : string) : boolean{

    let ok = false;

    
    if(this.name != ""){

      if(titre.toUpperCase().includes(this.name.toUpperCase()))
      ok = true;

    }

    if(this.genre != ""){
      
      if(this.genre == genre)
      ok = true;

    }

    if(ok)
    this.nbrElements++;



    console.log(this.nbrElements);

    return ok;
  }





  









}
