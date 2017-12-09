import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from '../../../modele/livre';

@Component({
  selector: 'livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css'],
  inputs : ['link','auteur','titre','prixElectronique','prixPhysique','stock','genre','description']
})
export class LivreComponent implements OnInit {

  @Input('titre') titre : string;
  @Input('prixPhysique') prixPhysique : number;
  @Input('prixElectronique') prixElectronique : number;
  @Input('link') link : string;
  @Input('description') description : string;


  livres:Array<Livre>;

  constructor(private router : Router) { }

  ngOnInit() {
  }



  ajouterAuPanier(choix : boolean){


        let l = new Livre(this.titre,this.prixElectronique,this.prixPhysique,choix,this.link,this.description);
    
        this.livres = JSON.parse(localStorage.getItem("livres"));
    
    
        if(this.livres == null)
        this.livres = new Array<Livre>();
        
    
        this.livres.push(l);
    
    
    localStorage.setItem("livres",JSON.stringify(this.livres));
    window.scrollTo(0,0);    
  }



  goDetails(titre:string){
     
        localStorage.removeItem("affiche");
        this.router.navigate(['details',titre]);
    
      }
    


}
