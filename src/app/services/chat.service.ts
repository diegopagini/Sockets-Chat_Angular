import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebsocketService) {}

  sendMessage(message: string): void {
    const payload = {
      from: 'Diego',
      body: message,
    };

    this.wsService.emit('message', payload);
  }

  getMessages(): Observable<any> {
    return this.wsService.listen('new-message');
  }
}
