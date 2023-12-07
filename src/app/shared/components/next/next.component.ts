import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements OnInit {
  @Input() nextComp !:number;
  constructor() { }

  ngOnInit(): void {
  }

}
