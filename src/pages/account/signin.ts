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

  userId: any;
  password: any;

  private pushPage: any;

  constructor(public navCtrl: NavController, public ss: SharedService, public alertCtrl: AlertController) {
    this.pushPage = SignUpPage;
  }

  public signIn(){
    var self = this;

    // Code here
    // stalk을 이용해서 로그인 구현하기
    self.gotoMain();
  }

  private gotoMain(){
    this.navCtrl.push(TabsPage, {});  
  }
}