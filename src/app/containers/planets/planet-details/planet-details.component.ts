
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanetDetailsComponent implements OnInit {

  resource = 'planets/';
  itemId: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data.url) {
      this.itemId = this.extractIdFromUrl(this.data.url)
    }
  }

  extractIdFromUrl(url = '') {
    let id: Number;
    let regex = /\d*\/$/
    let math = url.match(regex)[0];
    id = new Number(math.replace('/', ''));
    return id;
  }

}

