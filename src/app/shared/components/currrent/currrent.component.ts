import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currrent',
  templateUrl: './currrent.component.html',
  styleUrls: ['./currrent.component.scss']
})
export class CurrrentComponent implements OnInit {
  @Input() curCompo !:number;
  constructor() { }

  ngOnInit(): void {
  }

}
