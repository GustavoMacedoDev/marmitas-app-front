import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoItem } from 'src/app/shared/models/produto-item.model';
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-lista-lanches',
  templateUrl: './lista-lanches.component.html',
  styleUrls: ['./lista-lanches.component.css'],
  animations: [
    trigger('categoriaAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ListaLanchesComponent implements OnInit {

  categoriaState = 'ready'  
  @Input() categoria: ProdutoDto;
  @Output() add = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitAddEvent(){
    
  }

  addMenuItem(item: ProdutoItem){
    console.log(item);
  }

}
