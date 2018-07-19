import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import * as firebase from 'firebase'

@Injectable()
export class AuthService {
  public tokenId: string;

  constructor(
    private router: Router
  ) {}

  public createUser(user: User): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then( (response) => {
        console.log(response);
        user.password = '';
        this.dbNameRegister(user);
      });
  }
  public userLogin(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then( () => {
        firebase.auth().currentUser.getIdToken()
          .then( (tokenId) => {
            this.tokenId = tokenId;
            localStorage.setItem('token', tokenId);
            this.router.navigate(['/home']);
          });
      });
  }

  public getEmail(): string {
    return btoa(firebase.auth().currentUser.email);
  }

  public dbNameRegister(user: User) {
    firebase.database().ref(`user/${btoa(user.email)}`).set(user);
  }

  public getUser(email: string): Promise<string> {
    return new Promise( (resolve, reject) => {
      firebase.database().ref(`user/${email}`).once('value')
      .then( (snapshot) => {
        resolve(snapshot.val().user);
      });
    });
  }

  public userSignedIn() {
    // Check if user not logged in, redirects him to the root (login/register screen)
    if (this.tokenId === undefined) {
      this.router.navigate(['/']);
    }
    
    // If logged user reloads the page, check the log in local storage
    if ( this.tokenId === undefined && 
      localStorage.getItem('token') !== null ) {
        this.tokenId = localStorage.getItem('token');
      }
    
    // return true if tokenId !== undefined. This method is called by Auth-Guard Service, this true return enable /main route 
    return this.tokenId !== undefined;
  }

  public logOff() {
    firebase.auth().signOut()
      .then( () => {
        localStorage.removeItem('token');
        this.tokenId = undefined;
        this.router.navigate(['/']);
      });
  }
}