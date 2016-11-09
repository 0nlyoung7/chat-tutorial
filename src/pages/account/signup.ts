import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { SharedService } from '../../app/sharedService';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public ss: SharedService, public alertCtrl: AlertController) {
  }
}