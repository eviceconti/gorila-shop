import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import routes
import { ROUTES } from './app.routes';

//import Services
import { ListItemsService } from './list-items.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

//Import Components
import { AppComponent } from './app.component';
import { AddItemComponent } from './home/add-item/add-item.component';
import { MainListComponent } from './home/main-list/main-list.component';
import { AccessComponent } from './access/access.component';
import { RegisterComponent } from './access/register/register.component';
import { LoginComponent } from './access/login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    MainListComponent,
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
    AuthService,
    AuthGuardService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
