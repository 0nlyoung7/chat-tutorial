import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';

import { NavController, App } from 'ionic-angular';

import {SharedService} from '../../app/sharedService';

import { SettingFormPage } from './settingForm';


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  user:any;

  @ViewChild('fileInput') fileInput:ElementRef;

  constructor(private renderer: Renderer, public navCtrl: NavController, public ss: SharedService, private app:App) {
    this.user = {};
  }

  public gotoSettingForm(propKey,propKeyNm){
    this.app.getRootNav().push(SettingFormPage, {"propKey":propKey,"propKeyNm":propKeyNm});
  }

  public selectFile = () => {
    let event = new MouseEvent('click', {bubbles: true});
    this.renderer.invokeElementMethod(this.fileInput.nativeElement, 'dispatchEvent', [event]);
  }

  public onFileChange = ($event, fileValue) => {
    var self = this;

    this.ss.stalk.updateUser( "profileFile", self.fileInput.nativeElement, function(err, user){
      console.log( user );
    });
  }

  public logOut = () => {
    var self = this;

    // Code here
    // stalk-im을 이용하여 로그아웃하기
    // 화면을 root로 이동하기
  }
}