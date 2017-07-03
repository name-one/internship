import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss']
})
export class InputformComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
  addTask(event): void{
    event.preventDefault();

    if(event.type == 'keyup' && event.keyCode == 13 || event.type == 'submit'){

    }
  }
}
