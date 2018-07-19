import { Item } from './item.model';
import * as firebase from 'firebase';

export class ListItemsService {
  private items: Item[] = [];

  public addItem(email: string, input: string) {
    let newItem = {
      checked: false,
      name: input
    };
    
    //Access the database and the items path of the specific user, then push new data on this path
    firebase.database()
    .ref(`listItems/${email}`)
    .push(newItem)
    .then( (response) => {
    });

    //push the same data locally
    this.items.push(newItem);
    console.log('service add:', this.items);
  }

  public fetchItems(email): Promise<any[]> {
    return new Promise( (resolve) => { 
      this.items = [];
      firebase.database().ref(`listItems/${email}`)
        .once('value')
        .then( (snapshot) => {
          snapshot.forEach( (childSnapshot) => {
            let item: Item = childSnapshot.val();
            this.items.push(item); 
          });
          resolve(this.items);
        });
    });
  }

  public getUncheckedItems() {
    return this.items.filter(item => item.checked === false);
  }

  public getCheckedItems() {
    return this.items.filter(item => item.checked === true);
  }

  public deleteItem(email: string, name: string) {
    //this filter returns all items except the item that match the name
    let newItems = this.items.filter(item => item.name !== name);

    //Access the database and the items path of the specific user, then change all data for this new one
    firebase.database()
    .ref(`listItems/${email}`)
    .set(newItems)
    .then( (response) => {
    });

    //set the same data locally
    this.items = newItems;
    console.log(this.items);
  }

  public toggleCheckedItem(email: string, name: string) {
    let index: number;
    this.items.map((item, i) => {
      if (item.name === name) { index = i; }
    });
    (!this.items[index].checked) 
    ? this.items[index].checked = true
    : this.items[index].checked = false;

    //Access the database and the items path of the specific user, then change all data for this new one
    firebase.database()
    .ref(`listItems/${email}`)
    .set(this.items)
    .then( (response) => {
    });
    console.log('service toggle', this.items);
  }
}