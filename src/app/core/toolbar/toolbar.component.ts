import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'fury-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input('quickpanel') quickpanel: MatSidenav;
  navLinks = [
    {label: "Home", path: ""},
    {label: "Planetas", path: "/planets"},
    {label: "Pessoas", path: "/people"},
    {label: "Espécies", path: "/species"},
  ]

  constructor(
  ) {
  }

  ngOnInit() { }

}
