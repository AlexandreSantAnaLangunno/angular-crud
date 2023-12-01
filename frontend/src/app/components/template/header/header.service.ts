import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    private headerData = new BehaviorSubject<HeaderData>({
        title: 'Início',
        icon: 'home',
        routeUrl: ''
    });

    constructor() { }

    get HeaderData(): HeaderData {
        return this.headerData.value
    }

    set HeaderData(headerData: HeaderData) {
        this.headerData.next(headerData)
    }
}
