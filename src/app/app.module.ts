import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AviaryComponent } from './aviary/aviary.component';
import { NestComponent } from './nest/nest.component';
import { MaterialModule } from './material.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AviaryComponent,
    NestComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
