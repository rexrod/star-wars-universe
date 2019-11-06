import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceshipRoutingModule } from './spaceship-routing.module';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';

@NgModule({
    declarations: [
        SpaceshipComponent
    ],
    imports: [
        CommonModule,
        SpaceshipRoutingModule
    ],
    providers: []
})

export class SpaceshipModule {}