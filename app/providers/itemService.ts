import {Injectable} from 'angular2/core'

@Injectable()
export class ItemService {
  items = ['ItemService', 'Data']

  get() {
    return this.items;
  }

  add(item) {
    this.items.push(item)
  }

  remove(index){
    this.items.splice(index, 1);
  }
}
