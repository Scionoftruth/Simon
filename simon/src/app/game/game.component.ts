import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Color } from '../models/color';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //user input is stored in this array
  userList: number[] = [];

  //game generated sequence
  sequence: number[] = [];

  //level of game which corresponds to number of tones
  numLevel: number = 0;

  isGameOver: boolean = false;

  //check if the game has started
  isGameStart: boolean = false;

  isClickedGreen = false;
  isClickedRed = false;
  isClickedYellow = false;
  isClickedBlue = false;

  constructor() { }

  ngOnInit(): void {
  }

  resetGame():void{
    this.isGameStart = false;
    setTimeout(()=>this.startGame(),1000);
  }
  startGame(): void {
    console.log("gameStart "+ this.isGameStart+" game over "+ this.isGameOver);
    if (!this.isGameStart) {

      //reseting game paramters
      this.isGameOver = false;
      this.isGameStart = true;
      this.displayHint = false;

      this.sequence.length = 0;
      this.userList.length = 0;
      this.numLevel = 0;

      this.generateSequence();
      this.showSequence();
    }
  }

  //creates the sequence
  generateSequence(): void {
    this.numLevel++;
    this.sequence.push(Math.ceil(4 * Math.random()));
    console.log(this.sequence);
  }

  async showSequence(): Promise<any> {
    for (let i = 0; i < this.sequence.length; i++) {
      switch (this.sequence[i]) {
        case 1: this.isClickedGreen = true;
          this.playGreen();
          break;
        case 2: this.isClickedRed = true;
          this.playRed(); break;
        case 3: this.isClickedYellow = true;
          this.playYellow(); break;
        case 4: this.isClickedBlue = true;
          this.playBlue(); break;
      }

      //add a delay to the sequence
      await this.delay(700);
      setTimeout(() => this.resetButton(), 700);
    }

  }

  //not my code
  delay(milisec: number) {
    return new Promise(resolve => {
      setTimeout(() => { resolve('') }, milisec);
    })
  }


  //compare the current's user input to the generated sequece
  compareSequence(): void {

    if (this.userList[this.userList.length - 1] != this.sequence[this.userList.length - 1]) {
      this.isGameOver = true;
      this.isGameStart = false;
    }
  }

  async clickButton(color: string) {
    if (!this.isGameOver && this.isGameStart) {
      switch (color) {
        case "green": this.clickGreen();
          this.playGreen();

          break;
        case "red": this.clickRed();
          this.playRed();

          break;
        case "yellow": this.clickYellow();
          this.playYellow();

          break;
        case "blue": this.clickBlue();
          this.playBlue();

          break;
      }
      this.compareSequence();
      setTimeout(() => this.resetButton(), 1000);

      console.log("user list is ");
      console.log(this.userList);
      console.log(this.userList.length);
      console.log("num Level");
      console.log(this.sequence.length);
      //next round
      if (this.sequence.length === this.userList.length && !this.isGameOver) {
        await this.delay(1000);
        this.userList.length = 0;
        this.displayHint = false;
        
        this.generateSequence();
        this.showSequence();
      }

    }
  }

  resetButton() {
    this.isClickedGreen = false;
    this.isClickedRed = false;
    this.isClickedYellow = false;
    this.isClickedBlue = false;
  }

  //userfunctions
  clickGreen() {
    this.isClickedGreen = true;
    console.log(Color.GREEN);
    this.userList.push(Color.GREEN);
  }
  clickRed() {
    this.isClickedRed = true;
    console.log(Color.RED);
    this.userList.push(Color.RED);
  }
  clickYellow() {
    this.isClickedYellow = true;
    console.log(Color.YELLOW);
    this.userList.push(Color.YELLOW);

  }
  clickBlue() {
    this.isClickedBlue = true;
    console.log(Color.BLUE);
    this.userList.push(Color.BLUE);

  }

  playGreen() {
    let audio = new Audio();
    audio.src = "../../../assets/simonSound1.mp3";
    audio.load();
    audio.play();
  }

  playRed() {
    let audio = new Audio();
    audio.src = "../../../assets/simonSound2.mp3";
    audio.load();
    audio.play();
  }

  playYellow() {
    let audio = new Audio();
    audio.src = "../../../assets/simonSound3.mp3";
    audio.load();
    audio.play();
  }

  playBlue() {
    let audio = new Audio();
    audio.src = "../../../assets/simonSound4.mp3";
    audio.load();
    audio.play();
  }

  highlightGreen() {

  }

  //shows the sequence to the player
  displayHint:boolean = false;
  showHint():void {
    this.displayHint=!this.displayHint;
  }
}
