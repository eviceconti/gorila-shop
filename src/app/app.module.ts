import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MainListComponent } from './main-list/main-list.component';
import { TickedListComponent } from './ticked-list/ticked-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    MainListComponent,
    TickedListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
