import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { Product } from '../product.model';


import { ProductService } from '../../../components/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-product-update',
    standalone: true,
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        FormsModule
    ],
    templateUrl: './product-update.component.html',
    styleUrl: './product-update.component.less'
})
export class ProductUpdateComponent implements OnInit {
    products: Product[] = []; // Change the type to Product[]

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const idProduct = this.route.snapshot.paramMap.get('id');

        if (idProduct) {
            this.productService.readById(idProduct).subscribe(product => {
                this.product = product;
            });
        } else {
            this.productService.showMessage('Produto não encontrado')
            this.router.navigate(['/products'])
        }
    }

    product: Product = {
        name: '',
        price: 0
    }



    updateProduct(): void {
        this.productService.update(this.product).subscribe(product => {
            this.productService.showMessage('Produto atualizado com sucesso');
            this.router.navigate(['/products']);
        });

    }

    cancel(): void {
        this.productService.showMessage('Operação cancelada');
        this.router.navigate(['/products']);
    }

}
