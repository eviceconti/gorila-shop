import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  
  public panel = 'login';

  public showPanel(panel: string) {
    panel == 'register' ? this.panel = 'register' : this.panel = 'login';
  }


  constructor() { }

  ngOnInit() {
  }

}
