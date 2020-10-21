import { Injectable } from '@angular/core';
import { User } from '../models/model';

const USER = 'USER';
const STUDENT = 'STUDENT';
const PROF = 'PROF';
const TOKEN = 'TOKEN';

const ADMIN = 'admin';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public user = new User();
  public token = '';

  constructor() {
    this.getSession();
  }
  // se connecter
  public doSignIn(user: User, token) {
    if (!user || !token) {
      return;
    }
    this.user = user;
    localStorage.setItem(USER, (JSON.stringify(this.user)));

    this.token = token;
    localStorage.setItem(TOKEN, (JSON.stringify(this.token)));
  }

  public updateUser(user: User) {
    if (!user) {
      return;
    }
    this.user = user;
    localStorage.setItem(USER, (JSON.stringify(this.user)));
  }

  get isProf() { return this.user.role === PROF.toLowerCase(); }
  get isStudent() { return this.user.role === STUDENT.toLowerCase(); }
  get role() { return this.user.role; }

  // se deconnecter
  public doSignOut(): void {
    this.user = new User();
    this.token = '';
    localStorage.removeItem(USER);
    localStorage.removeItem(TOKEN);
  }

  // this methode is for our auth guard
  get isSignedIn(): boolean {
    return (!!localStorage.getItem(USER)) || (!!localStorage.getItem(TOKEN));
  }

  public getSession(): void {
    try {
      this.user = JSON.parse(localStorage.getItem(USER));
      this.token = JSON.parse(localStorage.getItem(TOKEN));

    } catch (error) {
      this.user = new User();
      this.token = '';
    }
  }



  get isAdmin() {
    return this.user.role === 'admin';
  }
}
