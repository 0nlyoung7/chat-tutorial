import { Component, ElementRef, ViewChild, Renderer } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {SharedService} from '../../app/sharedService';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  inputMessage: any;
  messages:any[] = [];

  @ViewChild('fileInput') fileInput:ElementRef;

  constructor(private renderer: Renderer, public navCtrl: NavController, public ss: SharedService, private navParams: NavParams) {

    let paramChat = navParams.get('paramChat');

    var self = this;

    // Code here
    // stalk을 이용하여 채팅 시작하기
    // 생성된 chat 객체를 이용해서, 메세지 목록 조회하기
    // 생성된 chat 객체에 onMessage 이벤트 등록하기
  }

  public send = () => {
    var msg = this.inputMessage;

    // Code here
    // stalk을 이용해서 text 메세지를 전송하기
    this.inputMessage = '';
  }

  private onMessage = function(data){
    this.messages.push( data );
  }
}