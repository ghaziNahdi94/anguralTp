import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LivreDataService} from '../livres/livre-data.service';
import {Livre} from '../../../modele/livre';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers : [LivreDataService]
})
export class DetailsComponent implements OnInit {



  private titre:string;
  private livre:Livre;
  private auteur:string;
  private stock:number;

  constructor(private route : ActivatedRoute,private dataServices : LivreDataService) { }

  ngOnInit() {

    this.route.params.subscribe(params => this.titre = params['name']);


    this.dataServices.getAllLivres().subscribe(

      (data : Livre[]) => {

        let l = data.filter(ll => ll.titre == this.titre);

        console.log(l);

        this.livre = new Livre(l[0].titre,l[0].prixElectronique,l[0].prixPhysique,true,l[0].image,l[0].description);
        

        this.auteur = l[0].auteur;
        this.stock = l[0].quantity;


      }

    );


    

  }





  ajouterAuPanier(choix : boolean){

      let l = new Livre(this.livre.titre,this.livre.prixElectronique,this.livre.prixPhysique,choix,this.livre.image,this.livre.description);
    
        let livres = JSON.parse(localStorage.getItem("livres"));
    
    
        if(livres == null)
        livres = new Array<Livre>();
        
    
        livres.push(l);
    
    
    localStorage.setItem("livres",JSON.stringify(livres));
    window.scrollTo(0,0);        
  }


}
