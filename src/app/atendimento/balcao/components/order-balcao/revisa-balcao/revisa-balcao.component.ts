import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-revisa-balcao',
  templateUrl: './revisa-balcao.component.html',
  styleUrls: ['./revisa-balcao.component.css']
})
export class RevisaBalcaoComponent implements OnInit {

  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.itemsValue
  }

}
