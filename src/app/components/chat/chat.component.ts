import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  text: string = '';
  messages: any[] = [];
  subscription!: Subscription;
  element!: HTMLElement | any;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    /**
     * Tomamos el elemento message de la vista.
     */
    this.element = document.getElementById('message');

    this.subscription = this.chatService.getMessages().subscribe((message) => {
      /**
       * Cada vez que se detecta un nuevo mensaje este se agrega a la lista de mensajes y se hace scroll
       * hasta el último recibido.
       */
      this.messages.push(message);
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
    });
  }

  /**
   * Método para enviar el mensaje al servidor.
   */
  onSend(): void {
    if (this.text.trim().length > 0) {
      this.chatService.sendMessage(this.text);
      this.text = '';
    }
  }

  /**
   * Eliminamos la subscripción cuando el componente se destruye.
   */

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
