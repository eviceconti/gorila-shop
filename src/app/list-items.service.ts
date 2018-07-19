import { Item } from './item.model';
import * as firebase from 'firebase';

export class ListItemsService {
  private items: Item[] = [];

  public addItem(input: string) {
    let newItem = {
      checked: false,
      name: input
    };
    this.items.push(newItem);
    console.log('service add:', this.items);
  }

  public getUncheckedItems() {
    return this.items.filter(item => item.checked === false);
  }

  public getCheckedItems() {
    return this.items.filter(item => item.checked === true);
  }

  public deleteItem(name: string) {
    let newItems = this.items.filter(item => item.name !== name);
    this.items = newItems;
    console.log(this.items);
  }

  public toggleCheckedItem(name: string) {
    let index: number;
    this.items.map((item, i) => {
      if (item.name === name) { index = i; }
    });
    (!this.items[index].checked) 
    ? this.items[index].checked = true
    : this.items[index].checked = false;
    console.log('service toggle', this.items);
  }
}