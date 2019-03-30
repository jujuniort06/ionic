import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Messages } from '../providers/messages';
import { Toasts } from '../providers/toast';
import { PrincipalPage } from '../pages/principal/principal';
import { EnderecoPage } from '../pages/endereco/endereco';
import { LoginProvider } from '../providers/login';
import { HttpProvider } from '../providers/http';
import { HttpModule} from '@angular/http';
import { TamanhosProvider } from '../providers/tamanhos';
import { SaboresProvider } from '../providers/sabores';
import { ProviderEnderecoProvider } from '../providers/providerEndereco';
import { BairroProvider } from '../providers/bairro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PrincipalPage,
    EnderecoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PrincipalPage,
    EnderecoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toasts,
    LoginProvider,
    HttpProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TamanhosProvider,
    SaboresProvider,
    ProviderEnderecoProvider,
    BairroProvider
  ]
})
export class AppModule {}
