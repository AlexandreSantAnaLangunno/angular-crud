import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


import { ProductService } from '../../../components/product/product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { HttpClientModule } from '@angular/common/http';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HeaderService } from '../../../components/template/header/header.service';


@Component({
    selector: 'app-product-create',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule
    ],
    templateUrl: './product-create.component.html',
    styleUrl: './product-create.component.less',
    providers: [ProductService]

})
export class ProductCreateComponent implements OnInit {

    product: Product = {
        name: '',
        price: 0
    }

    /**
     * Construtor da classe
     * @param productService - Serviço utilizado para operações relacionadas a produtos
     * @param router - Serviço de roteamento para navegar entre componentes
     */
    constructor(
        private productService: ProductService,
        private router: Router,
        private headerService: HeaderService
    ) {
        headerService.HeaderData = {
            title: 'Crie um novo produto',
            icon: 'home',
            routeUrl: '/'
        }

    }
    /**
     * Método do ciclo de vida chamado após a inicialização do componente
     */
    ngOnInit(): void {

    }

    /**
     * Método chamado ao criar um novo produto
     * @returns void
     */
    createProduct(): void {
        this.productService.create(this.product).subscribe(() => {
            this.productService.showMessage('Operação realizada com sucesso');
            this.router.navigate(['/products']);
        })
    }

    cancel(): void {
        this.productService.showMessage('Operação cancelada')
        setTimeout(() => {
            this.router.navigate(['/products'])
        }, 3000);
    }

}
