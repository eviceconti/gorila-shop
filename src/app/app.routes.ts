import { Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AccessComponent } from './access/access.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', component: AccessComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] }
];