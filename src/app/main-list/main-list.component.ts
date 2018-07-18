import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../list-items.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  public items: any[] = [];
  public checkedItems: any[] = [];
  public uncheckedItems: any[] = [];

  public deleteItem(name: string) {
    this.listItemsService.deleteItem(name);
  }

  public toggleItem(name: string) {
    this.listItemsService.toggleCheckedItem(name);
  }

  constructor(private listItemsService: ListItemsService) { }

  ngOnInit() { 
    
  }

  ngAfterContentChecked() {
    this.uncheckedItems = this.listItemsService.getUncheckedItems();
    this.checkedItems = this.listItemsService.getCheckedItems();
  }

}


/*
this.checkedItems = [];
    this.uncheckedItems = [];
    this.listItemsService.items.map(item => {
      (item.checked)
      ? this.checkedItems.push(item)
      : this.uncheckedItems.push(item);
    });
    console.log(this.checkedItems, this.uncheckedItems);
*/