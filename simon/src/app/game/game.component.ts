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

  playGreen(){
    let audio = new Audio();
    audio.src = "../../../assets/simonSound1.mp3";
    audio.load();
    audio.play();
  }

  playRed(){
    let audio = new Audio();
    audio.src = "../../../assets/simonSound2.mp3";
    audio.load();
    audio.play();
  }

  playYellow(){
    let audio = new Audio();
    audio.src = "../../../assets/simonSound3.mp3";
    audio.load();
    audio.play();
  }

  playBlue(){
    let audio = new Audio();
    audio.src = "../../../assets/simonSound4.mp3";
    audio.load();
    audio.play();
  }
}
