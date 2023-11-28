import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { ProductService } from '../../../components/product/product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-create',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: './product-create.component.html',
    styleUrl: './product-create.component.less'
})
export class ProductCreateComponent implements OnInit {

    /**
     * Construtor da classe
     * @param productService - Serviço utilizado para operações relacionadas a produtos
     * @param router - Serviço de roteamento para navegar entre componentes
     */
    constructor(
        private productService: ProductService,
        private router: Router
    ) { }
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
        this.productService.showMessage('Operação realizada com sucesso')
    }

    cancel():void{
        this.router.navigate(['/products'])
    }

}
