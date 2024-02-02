import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() advantageIndex: number;

  constructor() {
    this.advantage = {
      title: '',
      description: ''
    }

    this.advantageIndex = 0;
  }

  ngOnInit(): void {
  }

}
