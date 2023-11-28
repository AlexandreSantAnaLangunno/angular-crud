import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.less'
})
export class NotFoundComponent {
    constructor() { }

    ngOnInit(): void { }


}
