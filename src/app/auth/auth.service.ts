import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService{

    constructor(private router : Router) {}
    signupUser(email: string, password: string){
     firebase.auth().createUserWithEmailAndPassword(email,password)
     .catch(
         error =>console.log(error)
     )
    }


    signinUser(email: string, password: string) {

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(
              
            response => {
                console.log('hello')
                this.router.navigate(['/skf/place-order']);
                console.log("My response" + response);
            }
          )
          .catch(
            error => console.log(error)
          );
      }
 
      
}