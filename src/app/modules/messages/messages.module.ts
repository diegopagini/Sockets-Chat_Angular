import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, MessagesRoutingModule, ComponentsModule],
})
export class MessagesModule {}
