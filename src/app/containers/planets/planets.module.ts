
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { PlanetService } from "../../service/planet.service";
import { PlanetDetailsModule } from './planet-details/planet-details.module';
import { TopBannerModule } from 'app/shared/components/top-banner/top-banner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PlanetsRoutingModule,
    PlanetDetailsModule,
    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    TopBannerModule
  ],
  declarations: [PlanetsComponent],
  exports: [PlanetsComponent],
  providers: [
    PlanetService
  ]
})
export class PlanetsModule { }

