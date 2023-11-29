import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ProductReadComponent } from './product-read/product-read.component';


@Component({
    selector: 'app-product-crud',
    standalone: true,
    imports: [CommonModule, MatButtonModule, ProductReadComponent],
    templateUrl: './product-crud.component.html',
    styleUrl: './product-crud.component.less'
})
export class ProductCrudComponent {

    constructor(private router: Router) { }

    newProduct = 'Novo Produto';

    navigateToProductCreate(): void {
        this.router.navigate(['/products/create'])
    }

}
