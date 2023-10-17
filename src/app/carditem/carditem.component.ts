import {  Component, EventEmitter, Input, Output  } from '@angular/core';
interface Product {
  id: number,
  title: string,
  author: string,
  summary: string,
  image:string,
  price: {
    currency: string,
    value: number,
    displayValue: string
  }
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
