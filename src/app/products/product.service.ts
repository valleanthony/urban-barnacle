import { Injectable } from '@angular/core';
import { Product } from './product-interface';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private url: string = 'api/products/products.json';

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    //In prod you would want to send this to a logging service;
    //instead of just logging to the console.

    let err = '';
    // a client side or network error occured
    if (error.error instanceof ErrorEvent) {
      err = `Something went wrong 🧨  ${error.message}`;
    } else {
      //The backend send an unsuccesful response
      err = `Back-end call was not succesful 🧨  with status code: ${error.status} && ${error.message}`;
    }
    console.error(err);
    return throwError(error);
  }
}
