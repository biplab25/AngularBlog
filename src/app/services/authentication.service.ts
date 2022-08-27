import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword,UserCredential } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);
  authState: any=null;

  constructor(private auth:Auth,private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(data=>this.authState=data)
  }

  get authenticated():boolean{
    return this.authState !== null
  }

  get currentUserId():string{
    return this.authenticated?this.authState.uid:null
  }

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout(): Observable<any> {
    return from(this.auth.signOut());
  }
}
