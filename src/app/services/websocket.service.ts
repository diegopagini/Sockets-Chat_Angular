import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  /**
   * Método para comprobar el estado de la conección al servidor.
   */

  checkStatus(): void {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  /**
   * Método para emitir eventos a nuestro socket.
   * @param {string} event
   * @param payload
   * @param {Function} callback
   */

  emit(event: string, payload?: any, callback?: Function): void {
    this.socket.emit(event, payload, callback);
  }

  /**
   * Método para esuchar cualquier evento de nuestro socket.
   * @param {string} event
   * @returns {Observable<any>}
   */

  listen(event: string): Observable<any> {
    return this.socket.fromEvent(event);
  }
}
