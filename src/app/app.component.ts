import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private websocketService: WebsocketService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.chatService.getPrivateMessages().subscribe(console.log);
  }
}
