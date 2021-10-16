import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-revisa-mesa',
  templateUrl: './revisa-mesa.component.html',
  styleUrls: ['./revisa-mesa.component.css']
})
export class RevisaMesaComponent implements OnInit {

  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.itemsValue
  }


}
