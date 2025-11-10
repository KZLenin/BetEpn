import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.getUser().pipe(
      take(1), // solo tomar el estado actual
      map(user => {
        if (user) {
          return true; // usuario logueado
        } else {
          this.router.navigate(['/login']); // redirigir al login
          return false;
        }
      })
    );
  }
}
