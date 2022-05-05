import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [FooterComponent, ChatComponent, UserListComponent],
  imports: [CommonModule, FormsModule],
  exports: [FooterComponent, ChatComponent, UserListComponent],
})
export class ComponentsModule {}
