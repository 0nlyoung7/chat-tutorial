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
  }  
}