import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, ChatComponent],
  imports: [CommonModule, FormsModule],
  exports: [FooterComponent, ChatComponent],
})
export class ComponentsModule {}
