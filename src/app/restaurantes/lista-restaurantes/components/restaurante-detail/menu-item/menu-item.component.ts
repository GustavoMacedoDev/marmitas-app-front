import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoItem } from 'src/app/shared/models/produto-item.model';
import {trigger, state, style, transition, animate} from '@angular/animations'


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready'
  
  @Input() produtoItem: ProdutoItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.produtoItem);
  }
}
