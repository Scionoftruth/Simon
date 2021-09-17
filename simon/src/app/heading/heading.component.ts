import { Component, Input, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit,OnChanges {

    
  @Input()level:number = 0;
  @Input()isGameOver:boolean = false;

  //displayed to the user based on how many rounds they play
  firstLevelAdjective:string[] = ['GOOD','COOL','NICE','COMMENDABLE','GREAT'];
  secondLevelAdjective:string[] = ['WONDERFUL','SUBLIME','DELIGHTFUL','SPLENDID','AMAZING'];
  thirdLevelAdjective:string[] = ['MARVELOUS','GLORIOUS','EXQUISITE','EXCEPTIONAL','PHENOMINAL','ASTONISHING'];

  adjBackground:string = '';

  adjective:string="";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.setAdjective();
    setTimeout(()=>this.resetAdjective(),3000);
  }

  setAdjective():void{
    
    if (this.level >=5 && this.level <=10 && !this.isGameOver){
      this.adjBackground = 'first';
      this.adjective = this.firstLevelAdjective[Math.floor(this.firstLevelAdjective.length * Math.random())];

    }
    if (this.level >10 && this.level <=20 && !this.isGameOver){
      this.adjBackground = 'second';
      this.adjective = this.secondLevelAdjective[Math.floor(this.secondLevelAdjective.length * Math.random())];
    }
    if (this.level >20 && !this.isGameOver){
      this.adjBackground = 'third';
      this.adjective = this.thirdLevelAdjective[Math.floor(this.thirdLevelAdjective.length * Math.random())];
    }
  }
  resetAdjective():void{
    this.adjective="";
  }

}
