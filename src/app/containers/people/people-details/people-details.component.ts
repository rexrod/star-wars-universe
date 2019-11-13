
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PeopleDetailsComponent implements OnInit {

  readonly resource = 'people/';
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

