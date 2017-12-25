export class User{



email:string;
nom:string;
prenom:string;
password:string;
address:string;
image:string;
livres:Array<string>;

constructor(email:string,nom:string,prenom:string,password:string,address:string,image:string){
this.email = email;
this.nom = nom;
this.prenom = prenom;
this.address = address;
this.password = password;
this.image = image;
this.livres = new Array<string>();
}

}