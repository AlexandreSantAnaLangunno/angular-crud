import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
    selector: 'app-product-crud',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
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
