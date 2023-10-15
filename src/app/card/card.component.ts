import { Component, EventEmitter, Input, Output  } from '@angular/core';
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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: Product | undefined;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();

  addToCart(product:Product) {
    this.addProduct.emit(product);
  }
}
