import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss']
})
export class PreviousComponent implements OnInit {
  @Input() preComp!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
