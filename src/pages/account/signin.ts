import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignUpPage } from './signup';

import {SharedService} from '../../app/sharedService';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SignInPage {

  username: string;
  password: string;

  pushPage: any;

  constructor(public navCtrl: NavController, public ss: SharedService, public alertCtrl: AlertController) {
    this.pushPage = SignUpPage;
  }

  public signIn =()=> {
    var self = this;
  }
}