import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { User } from '../../../modele/User';
import { useAnimation } from '@angular/core/src/animation/dsl';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Livre } from '../../../modele/livre';




@Injectable()
export class LivreDataService {

 
  private urlAddUser = "http://localhost:8080/libraryAngular/UserServlet";
  private urlLogin = "http://localhost:8080/libraryAngular/LoginServlet";
  private urlLivre = "http://localhost:8080/libraryAngular/LivreServlet";
  private urlUserLivre = "http://localhost:8080/libraryAngular/UserLivre";

  
  constructor(private http : HttpClient) { }



 connect(email:string,password:string){


  let req = new ConnectRequest(email,password);
  return this.http.post(this.urlLogin,JSON.stringify(req));


 } 


 getLivresByEmail(email:string){

return this.http.get(this.urlUserLivre+"?email="+email);

 }

commandHistorique(livres:Livre[]){

  return this.http.post(this.urlUserLivre,JSON.stringify(livres));

}


 command(livres:Livre[]){



 
  return this.http.post<Livre[]>(this.urlLivre,JSON.stringify(livres));


 }


 addUser(user: User) {
    

  return this.http.post<User>(this.urlAddUser,JSON.stringify(user));



  }







 getAllLivres(){


 return this.http.get(this.urlLivre);


 } 

  



   

}


class ConnectRequest {
  
  email:string;
  password:string;

  constructor(email,password){this.email = email; this.password = password;}
  
      }