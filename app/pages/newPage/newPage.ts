import {Page, NavController} from 'ionic-framework/ionic';
import {ListPage} from '../listPage/listPage';
import {ItemService} from '../../providers/itemService'

@Page({
  providers: [ItemService],
  templateUrl: 'build/pages/newPage/newPage.html'
})
export class newPage {
  items = ['item1', 'item2', 'item3']
  constructor( public nav: NavController, public itemService: ItemService){
    this.items = itemService.get();
  }

  addListPage() {
    this.nav.push(ListPage, {itemsKey: this.items});
  }
}
