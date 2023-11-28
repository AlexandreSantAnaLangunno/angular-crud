import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from '../../../views/home/home.component';
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';
import { RouterModule } from '@angular/router';





@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [CommonModule, MatSidenavModule, MatListModule, MatIconModule, ProductCrudComponent, RouterModule],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.less'
})
export class NavComponent {
    showFiller = false;
}
