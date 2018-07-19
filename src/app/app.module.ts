import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import routes
import { ROUTES } from './app.routes';

//import Services
import { ListItemsService } from './list-items.service';
import { AuthService } from './auth.service';

//Import Components
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MainListComponent } from './main-list/main-list.component';
import { TickedListComponent } from './ticked-list/ticked-list.component';
import { AccessComponent } from './access/access.component';
import { RegisterComponent } from './access/register/register.component';
import { LoginComponent } from './access/login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    MainListComponent,
    TickedListComponent,
    AccessComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ 
    ListItemsService,
    AuthService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
