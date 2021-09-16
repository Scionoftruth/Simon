import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

    
  @Input()level:number = 0;
  @Input()isGameOver:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
