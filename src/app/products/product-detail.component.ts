import { Component, OnInit } from '@angular/core';
import { Product } from './product-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  pageTitle: String = 'Product Detail';
  product: Product;
  passedId: String;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.passedId = id;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
