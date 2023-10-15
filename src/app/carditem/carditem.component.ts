import {  Component, EventEmitter, Input, Output  } from '@angular/core';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})
export class CarditemComponent {
  @Input() item: Product | undefined;
  @Output() removeFromCart : EventEmitter<number> = new EventEmitter()
  @Output() decrease:EventEmitter<number> =  new EventEmitter()
  @Output() increase:EventEmitter<number> =  new EventEmitter()
  data:number = 1
  removeProduct(id:number){
    this.removeFromCart.emit(id)
  }
  minus(id:number){
    if(this.data>1)
    {
      this.data -=1
      console.log(this.data)
      this.decrease.emit(id)
    }
  }
  plus(id:number){
    this.data+=1
    console.log(this.data)
    this.increase.emit(id)
  }
}
