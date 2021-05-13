import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  goal: string;
  find(searchTerm) {
    this.goal = searchTerm;
    // console.log(searchTerm);
    alert(this.goal);
  }
  constructor() { }

  ngOnInit() {
  }

}
