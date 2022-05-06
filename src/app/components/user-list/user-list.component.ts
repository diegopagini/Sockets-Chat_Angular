import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<any[]>;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    /**
     * De esta forma cuando utilizemos en la vista el pipe "async" el mismo controla por nosotros
     * la desuscripción.
     */
    this.chatService.emitActiveUsers();
    this.users$ = this.chatService.getActiveUsers();
  }
}
