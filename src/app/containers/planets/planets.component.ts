
import { Component, ViewEncapsulation, OnInit, HostListener, ViewChild, OnDestroy } from '@angular/core';
import { fadeOutAnimation } from '../../core/common/route.animation';
import { PlanetService } from 'app/service/planet.service';
import { Planet } from 'app/models/planet.model';
import { Page } from 'app/models/page.model';
import { UrlService } from 'app/service/url.service';
import { NotificationService } from 'app/service/notification.service';
import { MatDialog } from '@angular/material';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

@Component({
    selector: 'planets',
    templateUrl: './planets.component.html',
    styleUrls: ['./planets.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class PlanetsComponent implements OnInit, OnDestroy {

    page = 1;
    planets: Planet[];
    pagePlanet: Page<Planet>;
    resource = 'planets/';

    constructor(
        private planetService: PlanetService,
        private urlService: UrlService,
        private ns: NotificationService,
        private dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.loadPlanets(this.page).then(
            success => {
                this.pagePlanet = success;
                this.planets = this.pagePlanet.results;
            }
        ).catch(
            error => {
                this.ns.errorMessage(error)
            }
        );

        window.addEventListener('scroll', this.scroll, true);
    }


    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    removeEventScroll() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (event: any): void => {
        let pos = (event.srcElement.scrollTop) + event.srcElement.offsetHeight;
        let max = event.srcElement.scrollHeight;
        if (pos == max) {
            if (this.pagePlanet.next) {
                this.loadNextPage(this.pagePlanet.next).then(success => {
                    this.pagePlanet = success;
                    this.planets.push(...this.pagePlanet.results)
                }).catch(
                    error => {
                        this.ns.errorMessage(error)
                    })
            }
        }
    };

    loadNextPage(url = '') {
        return this.urlService.findByUrlWithoutPath(url).toPromise()
    }

    loadPlanets(page = 1, url = '') {
        return this.planetService.findAllPlanets(page, url).toPromise();
    }

    details(planet) {
        this.removeEventScroll();
        this.dialog.open(PlanetDetailsComponent, {
            panelClass: 'planets-details',
            data: planet
        }).afterClosed().subscribe((_planet: Planet) => {
            window.addEventListener('scroll', this.scroll, true);
        });
    }

}

