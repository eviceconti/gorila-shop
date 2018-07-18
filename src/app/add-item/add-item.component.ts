import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    console.log(this.newItemForm.value.newItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
