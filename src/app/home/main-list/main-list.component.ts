import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../../list-items.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  public items: any[] = [];
  public checkedItems: any[] = [];
  public uncheckedItems: any[] = [];
  public email: string;

  public deleteItem(name: string) {
    this.listItemsService.deleteItem(this.email, name);
  }

  public toggleItem(name: string) {
    this.listItemsService.toggleCheckedItem(this.email, name);
  }

  constructor(
    private listItemsService: ListItemsService,
    private authService: AuthService
  ) { }

  ngOnInit() { 
    this.authService.getEmail().then(email => {
      this.email = email;
      this.listItemsService.fetchItems(this.email)
      .then(items => {
        this.items = items;
      });
    });
  }

  ngAfterContentChecked() {
    this.uncheckedItems = this.listItemsService.getUncheckedItems();
    this.checkedItems = this.listItemsService.getCheckedItems();
  }
}