import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetComponent } from './components/planet/planet.component';

const appRoutes: Routes = [
    { path: '', component: PlanetComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class PlanetRoutingModule {}