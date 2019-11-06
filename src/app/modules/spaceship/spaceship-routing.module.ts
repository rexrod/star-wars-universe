import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpaceshipComponent } from './components/spaceship/spaceship.component';

const appRoutes: Routes = [
    { path: '', component: SpaceshipComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class SpaceshipRoutingModule {}