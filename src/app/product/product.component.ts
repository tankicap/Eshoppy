import { Component, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product

  get ImagePath(){
    return 'pictures/'+this.product.picture;
  }
}
