import { TournamentsPage } from './../pages/tournaments/tournaments';
import { MyTeamsPage } from './../pages/my-teams/my-teams';
import { Component,ViewChild } from '@angular/core';
import {Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StandingsPage} from '../pages/standings/standings'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  private homePage:any;
  @ViewChild(Nav) nav:Nav;
  rootPage:any = MyTeamsPage;
  
  


  pages: Array<{title:string,component:any}>
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.homePage = StandingsPage;
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  goHome(){
    this.nav.push(MyTeamsPage);
  }

  goToTournaments(){
    this.nav.push(TournamentsPage); 
  }

  showStandings()
  {

    //this.nav.push(StandingsPage); 
   this.rootPage=StandingsPage;

    //this.pushPage=StandingsPage;
    
  }
}
