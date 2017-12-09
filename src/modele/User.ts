export class User{



email:string;
nom:string;
prenom:string;
password:string;
address:string;

constructor(email:string,nom:string,prenom:string,password:string,address:string){
this.email = email;
this.nom = nom;
this.prenom = prenom;
this.address = address;
this.password = password;
}

}