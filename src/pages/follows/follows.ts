import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';

import {SharedService} from '../../app/sharedService';

import { ChatPage } from '../chat/chat';
import { SearchUserPage } from './searchUser';

@Component({
  selector: 'page-follows',
  templateUrl: 'follows.html'
})
export class FollowsPage {

  users:any[] = [];

  constructor(public navCtrl: NavController, public ss: SharedService, private app:App) {
    var self = this;

    this.users = [];

    // Code here
    // stalk을 이용해서 친구 목록 조회하기
    // 친구목록 조회 결과를 화면에 매핑하기
  }

  public gotoChat = (user) => {
    var paramChat = {users:[user]};
    this.app.getRootNav().push(ChatPage, {paramChat:paramChat});
  }

  public openSearchUser = () =>{
    this.app.getRootNav().push(SearchUserPage, {callback:this.refreshFollow});
  }

  public refreshFollow = () => {
    var self = this;


    // Code here
    // stalk을 이용해서 친구 목록 조회하기
    // 친구목록 조회 결과를 화면에 매핑하기
  }

  removeFollow(user, inx){
    var self = this;

    // Code here
    // stalk : remove follow
  }
}