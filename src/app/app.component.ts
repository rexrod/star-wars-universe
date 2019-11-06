import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { People } from './models/people.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    title = 'Star Wars Universe';

    constructor(
    ) {
        
    }

    peoples: People[];

    ngOnInit() {
    }
}