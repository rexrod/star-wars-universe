
import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { fadeOutAnimation } from '../../core/common/route.animation';
import { SpecieService } from 'app/service/specie.service';
import { Specie } from 'app/models/specie.model';
import { Page } from 'app/models/page.model';
import { UrlService } from 'app/service/url.service';
import { NotificationService } from 'app/service/notification.service';
import { MatDialog } from '@angular/material';
import { SpecieDetailsComponent } from './specie-details/specie-details.component';

@Component({
    selector: 'species',
    templateUrl: './species.component.html',
    styleUrls: ['./species.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class SpeciesComponent implements OnInit, OnDestroy {

    page = 1;
    species: Specie[];
    pageSpecies: Page<Specie>;
    readonly resource = 'species/';

    constructor(
        private planetService: SpecieService,
        private urlService: UrlService,
        private ns: NotificationService,
        private dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.loadSpecies(this.page).then(
            success => {
                this.pageSpecies = success;
                this.species = this.pageSpecies.results;
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
            if (this.pageSpecies.next) {
                this.loadNextPage(this.pageSpecies.next).then(success => {
                    this.pageSpecies = success;
                    this.species.push(...this.pageSpecies.results)
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

    loadSpecies(page = 1) {
        return this.planetService.findAllSpecies(page).toPromise();
    }

    details(planet) {
        this.removeEventScroll();
        this.dialog.open(SpecieDetailsComponent, {
            panelClass: 'specie-details',
            data: planet
        }).afterClosed().subscribe((_planet: Specie) => {
            window.addEventListener('scroll', this.scroll, true);
        });
    }

}

