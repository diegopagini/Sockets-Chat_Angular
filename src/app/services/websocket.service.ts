import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socketStatus = false;
  private user: User | any;

  constructor(private socket: Socket, private router: Router) {
    this.loadStorage();
    this.checkStatus();
  }

  /**
   * Método para comprobar el estado de la conección al servidor.
   */

  checkStatus(): void {
    this.socket.on('connect', () => {
      // console.log('Conectado al servidor');
      this.socketStatus = true;
      this.loadStorage();
    });

    this.socket.on('disconnect', () => {
      // console.log('Desconectado del servidor');
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

  /**
   * Método para loguearse en nuestro socket.
   * @param {string} name
   * @returns Promise<void>
   */

  loginWS(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.emit('configure-user', { name }, () => {
        this.user = new User(name);
        this.saveUserInLocalStorage();
        resolve();
      });
    });
  }

  /**
   * Método para desloguearse de nuestro socket.
   */

  logoutWS() {
    this.user = null;
    localStorage.removeItem('user');
    this.emit(
      'configure-user',
      {
        name: 'no-name',
      },
      () => {}
    );
    this.router.navigate(['/login']);
  }

  /**
   * Método para obtener nuestro usuario.
   * @returns User
   */

  getUser(): User {
    return this.user;
  }

  /**
   * Método para guardar nuestro usuario en localStorage.
   */
  private saveUserInLocalStorage(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  /**
   * Método para obtener nuestro usuario del localStorage.
   */

  private loadStorage(): void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') as string);
      this.loginWS(this.user.name);
    }
  }
}
