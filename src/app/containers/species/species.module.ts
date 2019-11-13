
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';
import { SpecieService } from "../../service/specie.service";
import { SpecieDetailsModule } from './specie-details/specie-details.module';
import { TopBannerModule } from 'app/shared/components/top-banner/top-banner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SpeciesRoutingModule,
    SpecieDetailsModule,
    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    TopBannerModule
  ],
  declarations: [SpeciesComponent],
  exports: [SpeciesComponent],
  providers: [
    SpecieService
  ]
})
export class SpeciesModule { }

