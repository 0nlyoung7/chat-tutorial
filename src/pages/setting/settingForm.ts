import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {SharedService} from '../../app/sharedService';

@Component({
  selector: 'page-settingForm',
  templateUrl: 'settingForm.html'
})
export class SettingFormPage {

  propValue:string;
  propKey:string;
  propKeyNm:string;

  constructor(public navCtrl: NavController, public ss: SharedService, private navParams: NavParams ) {

    this.propKey = navParams.get('propKey');
    this.propKeyNm = navParams.get('propKeyNm');
    this.propValue = ss.stalk.currentUser[this.propKey];
  }

  public updateUser(){
    var self = this;

    // Code here
    // stalk-im을 이용하여 사용자 정보 수정하기
    // 수정완료후 창닫기
  }

  public clearValue(){
    this.propValue = "";
  }
}
