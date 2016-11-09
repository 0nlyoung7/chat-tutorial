import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';

import {SharedService} from '../../app/sharedService';

import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  chats:any[] = [];

  constructor(public navCtrl: NavController, public ss: SharedService, private app:App ) {
    var self = this;

    // Code here
    // stalk을 이용하여 채팅목록 조회하기
  }

  public gotoChat = (channel) => {
    this.app.getRootNav().push(ChatPage, {channelId:channel.channelId, users:channel.users});
  }
}