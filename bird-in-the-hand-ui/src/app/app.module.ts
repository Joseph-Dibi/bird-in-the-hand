import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AviaryComponent } from './aviary/aviary.component';
import { NestComponent } from './nest/nest.component';
import { MaterialModule } from './material.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RegisterComponent } from './register/register.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { BirdManagementService } from './bird-management.service';
import { MDBModule } from './mdbModule.module';
import { DetailViewComponent } from './detail-view/detail-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AviaryComponent,
    NestComponent,
    MenuBarComponent,
    RegisterComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MDBModule,
  ],
  providers: [provideAnimations(), BirdManagementService, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
