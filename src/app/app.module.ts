import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

/**
 * Configuración de socketsIo.
 */
const config: SocketIoConfig = {
  url: environment.wsUrl,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    ComponentsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
