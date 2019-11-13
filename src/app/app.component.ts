import { Component, OnInit } from '@angular/core';
import { SidenavItem } from './core/sidenav/sidenav-item/sidenav-item.interface';
import { SidenavService } from './core/sidenav/sidenav.service';

export let browserRefresh = false;

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor(
    private sidenavService: SidenavService,
  ) { }

  ngOnInit() {
    this.loadSidenavItems();
  }

  loadSidenavItems() {

    const menu: SidenavItem[] = [];


    menu.push({
      name: 'Home',
      routeOrFunction: '',
      icon: 'dashboard',
      position: 0,
      customClass: 'menu-dashboard',
    });


    menu.push({
      name: 'Planetas',
      routeOrFunction: '/planets',
      icon: 'public',
      position: 1
    });

    menu.push({
      name: 'Personagens',
      routeOrFunction: '/people',
      icon: 'people',
      position: 2
    });

    menu.push({
      name: 'Espécies',
      routeOrFunction: '/species',
      icon: 'accessibility',
      position: 3
    });


    menu.forEach(item => this.sidenavService.addItem(item));

  }

}
