import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  userList = [];
  simonList: number[]= [];

  constructor() { }

  ngOnInit(): void {
  }

  clickGreen(){
    console.log(1);
    this.simonList.push(1)
  }
  clickRed(){
    console.log(2);
    this.simonList.push(2)
  }
  clickYellow(){
    console.log(3);
    this.simonList.push(3)
  }
  clickBlue(){
    console.log(4);
    this.simonList.push(4)
  }

  
}
