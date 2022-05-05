import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  text: string = '';
  messages$!: Observable<any>;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.messages$ = this.chatService.getMessages();
  }

  /**
   * Método para enviar el mensaje al servidor.
   */
  onSend(): void {
    this.chatService.sendMessage(this.text);
    this.text = '';
  }
}
