import { Component } from '@angular/core';

import { NavController, App , NavParams} from 'ionic-angular';

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

  getItems(ev: any) {
    var self = this;

    // set val to the value of the searchbar
    let val = ev.target.value;

    var data = {
      keyword: val,
      pageNumber: 1
    };

    if( this.timeout )clearTimeout(this.timeout);
    this.timeout = setTimeout(function(){

      // Code here
      // stalk의 함수를 이용해서 사용자 검색을 구현하기

    }, 200 );
  }

  addFollow = () => {
    var self = this;

    for( var userId in this.checkedList ){
      if( this.checkedList[userId] ){
        // Code here
        // stalk의 함수를 이용해서 Follow를 추가하기
        // 추가에 성공하면 callback 함수를 호출하고, pop 닫기
      }
    }
  }
}