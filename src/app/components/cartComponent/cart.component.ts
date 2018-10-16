import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../courseDetailsServices/course-details.service';
import { DetailsService } from '../courseDetailsServices/details.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Price: number = 0;

  cartItems: CourseDetailsService[];
  
  constructor(private detailsService: DetailsService) { }
  getItemsForCart(): void {
    this.cartItems = this.detailsService.getSelectedItems();
  }
  ngOnInit(): void {
    this.getItemsForCart();
    console.log(this.cartItems);
  }
  removeItemFromCart(id: number): void {
    this.detailsService.removeItem(id);
  }

  countPrice() {
    this.Price = 0;
    for (let p of this.cartItems) {
      this.Price += parseFloat(p.price)
    }
    return this.Price;
  };


}
