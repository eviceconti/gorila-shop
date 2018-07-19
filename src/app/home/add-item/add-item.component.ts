import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ListItemsService } from '../../list-items.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public newItemForm: FormGroup = new FormGroup({
    newItem: new FormControl(null)
  });
  public email: any;

  //method will be called on user click
  public handleSubmit() {
    let item = this.newItemForm.controls.newItem.value;
    console.log(item)
    let items = this.listItemsService.getUncheckedItems();
    console.log(items)
    let match = [];
    
    //check if the array is not empty and if item already exists in the array, before push it as a new item
    if (items) {
      match = items.filter(i => i.name === item);
      //console.log(match);
    }

    if (match.length === 0) {
      this.listItemsService.addItem(this.email, item);
    } else {
      alert(`O item ${item} ja esta na lista`);
    }
    this.newItemForm.reset();
  }

  constructor(
    private listItemsService: ListItemsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getEmail().then(response => {
      this.email = response;
    });
  }

}
