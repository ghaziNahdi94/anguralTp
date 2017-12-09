import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TypeComponent} from '../type/type.component';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit{
  
  
  
  ngOnInit(): void {
  localStorage.setItem("affiche","a");
  }
 


  constructor(private router : Router){}

 private types : any[] = [

  {"url" : "https://d2vvqscadf4c1f.cloudfront.net/R1H3Ms7QSQOwRpTbUImd_science.jpg","title" : "Scientifique", "description" : "Vous trouvez des livres scientifiques de tous les domaines exemple : mahématique,physique,informatique..."},
  {"url" : "https://thumbnails-visually.netdna-ssl.com/indian-diet-plan-for-weight-loss--bfy-market_57a08928b91f9.jpg","title" : "Sport", "description" : "Vous trouvez des livres de sport de tous les domaines exemple : football,tennis,histoire des sportifs..."},
  {"url" : "http://lewebpedagogique.com/cpdonnemarie/files/2008/02/livre.jpg","title" : "Loisirs et culture", "description" : "vous trouvez des livres enjoyable et des histoires pour les enfants"},

  {"url" : "https://www.images-booknode.com/book_cover/515/full/atlas-historique-du-monde-514971.jpg","title" : "Historique", "description" : "Vous trouvez des livres qui parlent sur les histoires anciennes"},
  {"url" : "http://images7.livreshebdo.fr/sites/default/files/assets/images/3284_756_manga.jpg","title" : "Mangas", "description" : "Vous trouvez des livres sur vos mangas préférés"},
  {"url" : "https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/5/b/2/5b2b94fdbc_80142_album-faune-juvenile3.jpg","title" : "Animaux", "description" : "Vous trouvez des livres sur les animaux"}

 ];

 
private typeClick(genre : string){

let link = ['/livres',"",genre];
this.router.navigate(link);

}



}
