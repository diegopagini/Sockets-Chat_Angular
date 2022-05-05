import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name: string = '';
  constructor(private wsService: WebsocketService) {}

  login(): void {
    this.wsService.loginWS(this.name);
    this.name = '';
  }
}
