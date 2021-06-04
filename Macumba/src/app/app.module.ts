import { LiturgiaComponent } from './component/home/liturgia/liturgia.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from "@angular/material/slider";
import { MatMenuModule } from "@angular/material/menu"
import { MatIconModule } from "@angular/material/icon"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home/home.component';
import { ListaFilhoComponent } from './component/filho/lista-filho/lista-filho.component';
import { FormsModule } from '@angular/forms';
import { DetalheFilhoComponent } from './component/filho/detalhe-filho/detalhe-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaFilhoComponent,
    DetalheFilhoComponent,
    LiturgiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
