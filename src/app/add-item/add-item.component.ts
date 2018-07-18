import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ListItemsService } from '../list-items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  public newItemForm: FormGroup = new FormGroup({
    newItem: new FormControl(null)
  });

  //method will be called on user click
  public handleSubmit() {
    this.listItemsService.addItem(this.newItemForm.value.newItem);
    this.newItemForm.reset();
    console.log(this.newItemForm.value.newItem);
  }

  constructor(private listItemsService: ListItemsService) { }

  ngOnInit() {
  }

}
