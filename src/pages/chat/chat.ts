import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';

import { NavController, NavParams, Content } from 'ionic-angular';

import {SharedService} from '../../app/sharedService';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  inputMessage: any;
  messages:any[] = [];
  channel:any;

  @ViewChild(Content) content: Content;
  @ViewChild('fileInput') fileInput:ElementRef;

  constructor(private renderer: Renderer, public navCtrl: NavController, public ss: SharedService, private navParams: NavParams) {

    let users = navParams.get('users');
    let channelId = navParams.get('channelId');   
    var self = this;

    // Code here
    // stalk을 이용하여 채팅 시작하기

    // Code here
    // 생성된 channel 객체를 이용해서, 메세지 목록 조회하기

    // Code here
    // 생성된 channel 객체에 onMessage 이벤트 등록하기
  }

  public send = () => {
    var msg = this.inputMessage;

    // Code here
    // stalk을 이용해서 text 메세지를 전송하기
    this.inputMessage = '';
  }
}