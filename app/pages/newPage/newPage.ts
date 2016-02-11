import {Page, NavController} from 'ionic-framework/ionic';
import {ListPage} from '../listPage/listPage';

@Page({
  templateUrl: 'build/pages/newPage/newPage.html'
})
export class newPage {
  constructor( public nav: NavController ){

  }

  addListPage() {
    this.nav.push(ListPage);
  }
}
