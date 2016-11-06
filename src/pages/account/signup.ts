import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { SharedService } from '../../app/sharedService';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  userId: any;
  password: any;

  // Alert 을 위한 alertCtrl 을 추가함
  constructor(public navCtrl: NavController, public ss: SharedService, public alertCtrl: AlertController) {
  }

  public signUp(){
    var self = this;

    // stalk을 이용해서 회원가입 구현하기
    // 회원가입이 완료되면 이전 페이지로 돌아가기
  }
}