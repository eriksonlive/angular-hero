import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/shared/navbar/navbar.component';
import { HomeComponent } from './componets/shared/home/home.component';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { AboutComponent } from './componets/about/about.component';
import { HeroeTarjetaComponent } from './componets/heroe-tarjeta/heroe-tarjeta.component';
import { HeroeComponent } from './componets/heroe/heroe.component';
import { HeroeTablaComponent } from './componets/heroe-tabla/heroe-tabla.component';
import { Espar } from './pipes/espar/espar.pipe.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    FooterComponent,
    AboutComponent,
    HeroeTarjetaComponent,
    HeroeComponent,
    HeroeTablaComponent,
    Espar,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
