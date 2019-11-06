import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetComponent } from './components/planet/planet.component';

@NgModule({
    declarations: [
        PlanetComponent
    ],
    imports: [
        CommonModule,
        PlanetRoutingModule
    ],
    providers: []
})

export class PlanetModule {}