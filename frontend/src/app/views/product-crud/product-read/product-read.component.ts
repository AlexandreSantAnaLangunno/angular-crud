import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../../components/product/product.service';
import { Product } from '../product.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatButtonModule } from '@angular/material/button';
import { TableProductComponent } from './table-product/table-product.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';


import { Router } from '@angular/router';
import { HeaderService } from '../../../components/template/header/header.service';



registerLocaleData(localePt);

@Component({
    selector: 'app-product-read',
    standalone: true,
    imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule, TableProductComponent, RouterModule],
    templateUrl: './product-read.component.html',
    styleUrl: './product-read.component.less',
    providers: [{
        provide: LOCALE_ID,
        useValue: 'pt-BR'
    }]
})

export class ProductReadComponent implements OnInit {


    products: Product[] = []; // Change the type to Product[]
    dataSource = new MatTableDataSource<Product>(this.products); // Initialize with an empty array
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;



    constructor(
        private productService: ProductService,
        private router: Router,
        private headerService: HeaderService
    ) {
        this.products = []; // Initialize the 'products' property with an empty array

        headerService.HeaderData = {
            title: 'Lista de Produtos',
            icon: 'inventory_2',
            routeUrl: '/'
        }

    }


    ngOnInit(): void {
        this.productService.read().subscribe(products => {
            this.products = products as unknown as Product[];
        })

    }
    displayedColumns: string[] = ['id', 'name', 'price', 'action'];


    deleteProduct(id: any): void {

        this.productService.delete(id).subscribe(products => {
            this.products = this.products.filter(product => product.id !== id);
            this.dataSource.data = this.products;
            this.productService.showMessage('Produto deletado com sucesso');

        })
    }

}
