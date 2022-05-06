import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public wsService: WebsocketService) {}

  /**
   * Método para enviar un mensaje al servidor.
   * @param {string} message
   */

  sendMessage(message: string): void {
    const payload = {
      from: this.wsService.getUser().name,
      body: message,
    };

    this.wsService.emit('message', payload);
  }

  /**
   * Método para recibir todos los mensajes.
   * @returns Observable<any>
   */
  getMessages(): Observable<any> {
    return this.wsService.listen('new-message');
  }

  /**
   * Método para escuchar mensajes privados.
   * @returns Obsevable<any>
   */
  getPrivateMessages(): Observable<any> {
    return this.wsService.listen('private-message');
  }
}
