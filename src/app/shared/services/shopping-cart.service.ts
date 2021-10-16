import { Injectable } from '@angular/core';
import { ProdutoItem } from '../models/produto-item.model';
import { CartItem } from '../models/cart-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor(private snackBar: MatSnackBar){}

  clear(){
    this.items = [];
  }

  addItem(item:ProdutoItem){
    let foundItem = this.items.find((mItem)=> mItem.produtoItem.id === item.id);
    if(foundItem){
      this.increaseQty(foundItem);
    }else{
      this.items.push(new CartItem(item));
    }
    let msg = "Você adicionou o item " + "  " + item.nome;
    this.snackBar.open(msg, "ADD", { duration: 1000 })
  }

  addItemMesa(itemMesa:ProdutoItem, mesa:any){
    console.log("mesa" + mesa);
    let foundItem = this.items.find((mItem)=> mItem.produtoItem.id === itemMesa.id);
    if(foundItem){
      this.increaseQty(foundItem);
    }else{
      this.items.push(new CartItem(itemMesa));
    }
    let msg = "Você adicionou o item " + "  " + itemMesa.nome;
    this.snackBar.open(msg, "ADD", { duration: 3000 })
  }

  addAdicional(item:ProdutoItem){
    let foundItem = this.items.find((mItem)=> mItem.produtoItem.id === item.id);
    if(foundItem){
      this.increaseQty(foundItem);
    }else{
      this.items.push(new CartItem(item));
    }
    let msg = "Você adicionou o item " + "  " + item.nome;
    this.snackBar.open(msg, "ADD", { duration: 3000 })
  }

  increaseQty(item: CartItem){
    item.quantidade = item.quantidade + 1;
  }

  decreaseQty(item: CartItem){
    item.quantidade = item.quantidade - 1;
    if (item.quantidade === 0){
      this.removeItem(item);
    }
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1);
    let msg = "Você removeu o item" +  item.produtoItem.nome;
    this.snackBar.open(msg, "REMOVE", { duration: 3000 });
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev+value, 0)
  }
}
