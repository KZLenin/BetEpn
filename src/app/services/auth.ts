import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // 🔹 Registrar usuario
  register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // 🔹 Iniciar sesión
  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // 🔹 Cerrar sesión
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  // 🔹 Observable del estado del usuario
  getUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  // 🔹 Obtener usuario actual como promesa (para uso puntual)
  async getCurrentUser(): Promise<firebase.User | null> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged(
        user => resolve(user),
        err => reject(err)
      );
    });
  }
    // 🔹 Enviar correo para restablecer contraseña
  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

}
