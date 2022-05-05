import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, ComponentsModule, FormsModule],
})
export class LoginModule {}
