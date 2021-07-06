import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private backend = 'http:localhost:8080/producto/';

  constructor(private http: HttpClient) { }

  getLista():Observable<Array<Producto>>{
    return this.http.get(this.backend + 'lista')
    .pipe(map((res: Array<Producto>) => res))
    .pipe(catchError(error => this.errorHandler(error)));
  }

  errorHandler = (error: HttpErrorResponse) => {
    return throwError(error.message || 'Server error');
  }
}
