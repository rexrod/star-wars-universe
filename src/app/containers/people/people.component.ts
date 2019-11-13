
import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { fadeOutAnimation } from '../../core/common/route.animation';
import { PeopleService } from 'app/service/people.service';
import { People } from 'app/models/people.model';
import { Page } from 'app/models/page.model';
import { UrlService } from 'app/service/url.service';
import { NotificationService } from 'app/service/notification.service';
import { MatDialog } from '@angular/material';
import { PeopleDetailsComponent } from './people-details/people-details.component';

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss'],
    animations: [fadeOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class PeopleComponent implements OnInit, OnDestroy {

    page = 1;
    people: People[];
    pagePeople: Page<People>;
    resource = 'people/';

    constructor(
        private planetService: PeopleService,
        private urlService: UrlService,
        private ns: NotificationService,
        private dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.loadPeople(this.page).then(
            success => {
                this.pagePeople = success;
                this.people = this.pagePeople.results;
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
            if (this.pagePeople.next) {
                this.loadNextPage(this.pagePeople.next).then(success => {
                    this.pagePeople = success;
                    this.people.push(...this.pagePeople.results)
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

    loadPeople(page = 1, url = '') {
        return this.planetService.findAllPeople(page, url).toPromise();
    }

    details(planet) {
        this.removeEventScroll();
        this.dialog.open(PeopleDetailsComponent, {
            panelClass: 'people-details',
            data: planet
        }).afterClosed().subscribe((_planet: People) => {
            window.addEventListener('scroll', this.scroll, true);
        });
    }

}

