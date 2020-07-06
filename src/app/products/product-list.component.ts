import { Component, OnInit } from '@angular/core';
import { Product } from './product-interface';
import { ProductService } from './product.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  errorValue:HttpErrorResponse;

  constructor(private productService: ProductService) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  starClicked(event: string): void {
    this.pageTitle = event;
  }
  ngOnInit(): void {
      this.productService.getProducts().subscribe(
       (data)=> this.products = data,
       (err) => this.errorValue = err,
       ()=> console.log('Call Complete')
     );
  }
}
