import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { HistoriaComponent } from './historia/historia.component';
import { AlbumesComponent } from './albumes/albumes.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    IntegrantesComponent,
    HistoriaComponent,
    AlbumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
