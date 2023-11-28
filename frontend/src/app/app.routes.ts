import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { NotFoundComponent } from './components/template/not-found/not-found.component';
import { ProductCreateComponent } from './views/product-crud/product-create/product-create.component';

export const routes: Routes = [

    { path: "", component: HomeComponent },
    { path: "products", component: ProductCrudComponent },
    {
        path: "products/create",
        component: ProductCreateComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },

];
