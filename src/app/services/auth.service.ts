import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;
  username:WritableSignal<string> = signal('');
  router= inject(Router);
  constructor() {
    this.loadUsername();
  }
  login(username: string) {
    if (username.length > 0) {
      localStorage.setItem('username', username);
      this.username.set(username);
      this.isLogged = true;
      this.router.navigate(['/home']);
    }
  }
  logout() {
    localStorage.removeItem('username');
    this.isLogged = false;
    this.router.navigate(['/login']);
  }
  private loadUsername(): void {
    if (localStorage.getItem('username')) {
      this.username.set(localStorage.getItem('username')||"")
      this.isLogged = true;
      this.router.navigate(['/home']);
    }
  }
}
