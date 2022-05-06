import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  user: User;

  constructor(private wsService: WebsocketService) {}

  ngOnInit(): void {
    this.user = this.wsService.getUser();
  }

  /**
   * Método para desloguearse.
   */
  logout(): void {
    this.wsService.logoutWS();
  }
}
