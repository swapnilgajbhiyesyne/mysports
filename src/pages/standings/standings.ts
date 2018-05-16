import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../../pages/my-teams/my-teams';

/**
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {

  data=[{"id":"Mumbai Indians","P":2,"W":2,"L":1,"PtS":4},{"id":"Rajasthan Royals","P":2,"W":2,"L":1,"PtS":4},{"id":"Chennai Super Kings","P":2,"W":2,"L":1,"PtS":4},{"id":"Sunrisers Hyderabad","P":2,"W":2,"L":1,"PtS":4}]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandingsPage');
  }
  goHome()
  {
    //this.navCtrl.push(MyTeamsPage);
    this.navCtrl.setRoot(MyTeamsPage)
  }

}
