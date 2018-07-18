export class ListItemsService {
  public items: string[] = [];

  public addItem(newItem: string) {
    this.items.push(newItem);
    console.log('service array:', this.items);
  }
}