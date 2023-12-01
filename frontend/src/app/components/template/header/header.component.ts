import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from './header.service';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.less'
})
export class HeaderComponent implements OnInit {

    constructor(private headerService: HeaderService) { }

    ngOnInit(): void {
    }

    get title(): string {
        return this.headerService.HeaderData.title
    }
    get icon(): string {
        return this.headerService.HeaderData.icon
    }
    get routeUrl(): string {
        return this.headerService.HeaderData.routeUrl
    }

}
