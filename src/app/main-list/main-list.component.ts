import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../list-items.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  public items: string[] = [];

  public deleteItem(index: number) {
    this.listItemsService.deleteItem(index);
  }

  constructor(private listItemsService: ListItemsService) { }

  ngOnInit() {
    this.items = this.listItemsService.items;
  }

}
