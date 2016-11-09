import { Component } from '@angular/core';

import { NavController, App, NavParams} from 'ionic-angular';

import {SharedService} from '../../app/sharedService';

@Component({
  selector: 'page-searchUser',
  templateUrl: 'searchUser.html'
})
export class SearchUserPage {

  searchQuery: string = '';
  users:any[] = [];

  timeout:any;
  checkedList: any = {};
  callback: any;

  constructor(public navCtrl: NavController, public ss: SharedService, private app:App, private navParams: NavParams) {
    this.callback = navParams.get('callback');
  }
}