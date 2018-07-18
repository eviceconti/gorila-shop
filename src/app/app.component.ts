import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAPG_6WlIYifjI0g8L5ttgWIQZfRvn4Diw",
      authDomain: "app-gorila-shop.firebaseapp.com",
      databaseURL: "https://app-gorila-shop.firebaseio.com",
      projectId: "app-gorila-shop",
      storageBucket: "app-gorila-shop.appspot.com",
      messagingSenderId: "1029555916550"
    };
    firebase.initializeApp(config);
  }
}
