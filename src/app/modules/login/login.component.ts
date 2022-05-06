import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name: string = '';
  constructor(private wsService: WebsocketService, private router: Router) {}

  /**
   * Método para loguearse y ser redirijido a la página de mensajes.
   */

  login(): void {
    this.wsService
      .loginWS(this.name)
      .then(() => this.router.navigate(['/messages']));
    this.name = '';
  }
}
