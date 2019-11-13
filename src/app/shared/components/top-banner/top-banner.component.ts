import { Component, Input, OnInit } from '@angular/core';
import { UrlService } from 'app/service/url.service';
import { NotificationService } from 'app/service/notification.service';

@Component({
    selector: 'top-banner',
    templateUrl: './top-banner.component.html',
    styleUrls: ['./top-banner.component.scss']
})

export class TopBannerComponent implements OnInit {
    pathImg = 'assets/img/'
    @Input() resource: string;
    @Input() itemId = 1;
    srcImg = '';
    @Input() isControlEnabled = true;

    constructor(
        private urlService: UrlService,
        private ns: NotificationService
    ) { }

    ngOnInit() {
        this.setSrcImg();
    }

    getPathImgDefault() {
        return this.pathImg + this.resource + 'default.png';
    }

    loadByUrl(url = '') {
        return this.urlService.findByUrl(url).toPromise();
    }

    setSrcImg() {
        if (this.itemId < 4) {
            this.srcImg = this.pathImg + this.resource + this.itemId + '.png';
        } else {
            this.srcImg = this.getPathImgDefault();
        }
    }

    previus() {
        if (this.itemId > 1) {
            this.itemId--;
            this.loadByUrl(this.resource + this.itemId).then(
                success => {
                    this.setSrcImg()
                }
            ).catch(
                error => {
                    this.ns.errorMessage(error)
                }
            )
        } else {
            this.ns.firstItemAlert()
        }
    }

    next() {
        this.itemId++;
        this.loadByUrl(this.resource + this.itemId).then(
            success => {
                this.setSrcImg()
            }
        ).catch(
            error => {
                this.ns.errorMessage(error)
            }
        )
    }
}