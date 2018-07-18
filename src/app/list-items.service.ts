export class ListItemsService {
  public items: string[] = [];

  public addItem(newItem: string) {
    this.items.push(newItem);
    console.log('service add:', this.items);
  }

  public deleteItem(index: number) {
    this.items.splice(index, 1);
    console.log('service del:', this.items);
  }
}