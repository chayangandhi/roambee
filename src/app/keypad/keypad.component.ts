import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {
public keys;
public history;

  constructor() { 
    this.keys = [[1,2,3], [4,5,6], [7,8,9], ['*',0, '#']]
    
  }

  ngOnInit(): void {

  }

  clicked(value, row, col){
    this.history = JSON.parse(localStorage.getItem('history')) ? JSON.parse(localStorage.getItem('history')) : [] ;
    let data = {
      label: value,
      coordinates: [row, col],
      timestamp: new Date()
    }
    console.log(data);
    this.history.push(data);
    localStorage.setItem('history', JSON.stringify(this.history));
  }

}
