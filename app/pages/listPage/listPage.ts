import {Page, NavController, NavParams} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/listPage/listPage.html'
})

export class ListPage {
  items = [];
  constructor( public nav: NavController, public params: NavParams ){
    this.items = params.get('itemsKey');
    console.dir( this.items );
  }
}
