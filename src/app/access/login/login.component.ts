import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../../user.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() public panel: EventEmitter<string> = new EventEmitter();
  
  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  public switchPanel() {
    this.panel.emit('register');
  }

  public userLogin() {
    let usuario: User = {
      email: this.form.controls.email.value,
      name: '',
      user: '',
      password: this.form.controls.password.value
    }
    this.auth.userLogin(usuario);
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
