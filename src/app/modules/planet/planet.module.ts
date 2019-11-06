import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetComponent } from './components/planet/planet.component';
import { MatCardModule } from '@angular/material/card';
import { PlanetService } from './planet.service';

@NgModule({
    declarations: [
        PlanetComponent
    ],
    exports: [PlanetComponent],
    imports: [
        CommonModule,
        PlanetRoutingModule,
    ],
    providers: [
        PlanetService
    ]
})

export class PlanetModule {}