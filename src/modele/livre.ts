export class Livre{

titre : string;
prixElectronique : number;
prixPhysique : number;
choixPhysique : boolean;
image : string;
quantity : number;
description:string;
genre:string;
auteur:string;


constructor(titre : string,prix1 : number,prix2 : number,choix : boolean,image : string,description:string){

    this.titre = titre;
    this.prixElectronique = prix1;
    this.prixPhysique = prix2;
    this.choixPhysique = choix;
    this.image = image;
    this.quantity = 1;
    this.description = description;
 
}




}