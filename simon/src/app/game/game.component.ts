import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import{Color} from '../models/color';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  userList:number[] = [];
  isClickedGreen = false;
  isClickedRed = false;
  isClickedYellow = false;
  isClickedBlue = false;

  constructor() { }

  ngOnInit(): void {
  }

  //game generated sequence
  sequence:number[] = [];
  
  //level of game which corresponds to number of tones
  numLevel:number = 0;

  //creates the sequence
  generateSequence():void{
    this.numLevel++;
    this.sequence.push(Math.ceil(4 * Math.random()));
    console.log(this.sequence);
  }

  clickGreen(){
    console.log(Color.GREEN);
    this.userList.push(Color.GREEN)
    //document.getElementsByClassName('green')[0].style.animation="colorchangegreen";
  }
  clickRed(){
    console.log(Color.RED);
    this.userList.push(Color.RED)
  }
  clickYellow(){
    console.log(Color.YELLOW);
    this.userList.push(Color.YELLOW)
  }
  clickBlue(){
    console.log(Color.BLUE);
    this.userList.push(Color.BLUE)   
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

  highlightGreen(){
    
  }

  arrayCheck(){
    console.log(this.userList)
  }
}
