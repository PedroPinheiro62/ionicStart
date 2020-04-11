import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroPageModule } from './intro/intro.module';
import { ConfiguracoesPageModule } from './configuracoes/configuracoes.module';
import { SobrePageModule } from './sobre/sobre.module';
import { PerfilPageModule } from './perfil/perfil.module';
import { FeedPageModule } from './feed/feed.module';
import { FilmeDetalhesPageModule } from './filme-detalhes/filme-detalhes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IntroPageModule, HttpClientModule, ConfiguracoesPageModule, SobrePageModule, PerfilPageModule, FeedPageModule, FilmeDetalhesPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
