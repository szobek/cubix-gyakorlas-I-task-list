import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cgyi-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  username: WritableSignal<string> = signal('');
  authService = inject(AuthService);
  constructor() {
    this.username=this.authService.username
  }
  logout() {
    this.authService.logout();
    this.username.set('');
  }
}

