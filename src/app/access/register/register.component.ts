import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../../user.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() public panel: EventEmitter<string> = new EventEmitter;
  public form: FormGroup = new FormGroup({
    mail: new FormControl(),
    name: new FormControl(),
    user: new FormControl(),
    password: new FormControl()
  })

  public switchPanel() {
    this.panel.emit('login');
  }

  public createUser() {
    let user: User = {
      email: this.form.controls.mail.value,
      name: this.form.controls.name.value,
      user: this.form.controls.user.value,
      password: this.form.controls.password.value
    };
    this.auth.createUser(user)
      .then( () => {
        this.switchPanel();
      });

  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
}
