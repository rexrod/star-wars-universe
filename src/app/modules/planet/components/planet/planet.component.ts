import { Component } from '@angular/core';
import { PlanetService } from '../../planet.service';
import { Planet } from '../../../../models/planet.model';

@Component({
    selector: 'planet-page',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.scss']
})

export class PlanetComponent {
    constructor(
        private planetService: PlanetService
    ) {

    }

    planets: Planet[];

    ngOnInit() {
        this.planetService.findAllPlanets().subscribe(
            success => {
                this.planets = success.content;
            },
            error => {
                console.log(error)
            })
    }
}