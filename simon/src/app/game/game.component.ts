import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import{Color} from '../models/color';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //user input is stored in this array
  userList:number[] = [];
  
  //game generated sequence
  sequence:number[] = [];
  
  //level of game which corresponds to number of tones
  numLevel:number = 0;

  isGameOver:boolean = false;

  isClickedGreen = false;
  isClickedRed = false;
  isClickedYellow = false;
  isClickedBlue = false;

  constructor() { }

  ngOnInit(): void {
  }

  //creates the sequence
  generateSequence():void{
    this.numLevel++;
    this.sequence.push(Math.ceil(4 * Math.random()));
    console.log(this.sequence);
  }

  async showSequence(){
    for(let i = 0; i <this.sequence.length; i++){
      switch(this.sequence[i]){
        case 1: this.playGreen();
        
        break;
        case 2: this.playRed(); break;
        case 3: this.playYellow(); break;
        case 4: this.playBlue(); break;
      }
      //add a delay to the sequence
      await this.delay(700);
      
    }
    
  }

   //not my code
  delay(milisec:number) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}


  //compare the current's user input to the generated sequece
  compareSequence():void{
    
    if(this.userList[length -1]!= this.sequence[length -1]){
      this.isGameOver = true;
    }
  }

  clickGreen(){    
    console.log(Color.GREEN);
    this.userList.push(Color.GREEN);
    this.compareSequence();
  }
  clickRed(){
    console.log(Color.RED);
    this.userList.push(Color.RED);
    this.compareSequence();
  }
  clickYellow(){
    console.log(Color.YELLOW);
    this.userList.push(Color.YELLOW);
    this.compareSequence();
  }
  clickBlue(){
    console.log(Color.BLUE);
    this.userList.push(Color.BLUE);
    this.compareSequence();   
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
