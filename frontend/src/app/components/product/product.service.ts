import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../views/product-crud/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    static read(): import("../../views/product-crud/product-read/table-product/table-product-datasource").TableProductItem {
        throw new Error('Method not implemented.');
    }

    baseUrl = "http://localhost:3001/products";


    constructor(
        private snackBar: MatSnackBar,
        private http: HttpClient,
    ) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, '', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        });
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl, product);
    }

    read(): Observable<Product> {
        return this.http.get<Product>(this.baseUrl);
    }

    readById(id: string): Observable<Product> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Product>(url);
    }

    update(product: Product): Observable<Product> {
        const url = `${this.baseUrl}/${product.id}`
        return this.http.put<Product>(url, product);
    }

    delete(id: string): Observable<Product> {
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<Product>(url);
        
    }
}
