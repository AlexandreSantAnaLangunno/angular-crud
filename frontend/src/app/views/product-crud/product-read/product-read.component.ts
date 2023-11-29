import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../components/product/product.service';
import { Product } from '../product.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
    selector: 'app-product-read',
    standalone: true,
    imports: [CommonModule, MatTableModule],
    templateUrl: './product-read.component.html',
    styleUrl: './product-read.component.less'
})

export class ProductReadComponent implements OnInit {


    products: Product[] = []; // Change the type to Product[]
    dataSource = new MatTableDataSource<Product>(this.products); // Initialize with an empty array

    constructor(private productService: ProductService) {
        this.products = []; // Initialize the 'products' property with an empty array

    }
    ngOnInit(): void {
        this.productService.read().subscribe(products => {
            this.products = products as unknown as Product[];

            console.log(this.products)
        })
    }
    displayedColumns: string[] = ['id', 'name', 'price'];
}
