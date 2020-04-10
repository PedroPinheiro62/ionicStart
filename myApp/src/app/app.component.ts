import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigProvider } from './api/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [
    ConfigProvider
  ]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private configProvider: ConfigProvider,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      let config = this.configProvider.getConfigData();

      if(config != null){
        this.router.navigateByUrl('tabs/home');
      } else {
        this.router.navigateByUrl('');
        this.configProvider.setConfigData(false);
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
