import { Component, OnInit } from '@angular/core';
import { Product } from './product-interface';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-prod',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-styles.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';
  products: Product[] = [];

  constructor(private productService: ProductService) {} 

  

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  starClicked(event: string): void {
    this.pageTitle = event;
  }
  ngOnInit(): void {
  this.products = this.productService.getProducts();
  }
}
