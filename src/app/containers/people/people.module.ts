
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../core/common/list/list.module';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { PeopleService } from "../../service/people.service";
import { PeopleDetailsModule } from './people-details/people-details.module';
import { TopBannerModule } from 'app/shared/components/top-banner/top-banner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PeopleRoutingModule,
    PeopleDetailsModule,
    // Core
    ListModule,
    PageModule,
    BreadcrumbsModule,
    TopBannerModule
  ],
  declarations: [PeopleComponent],
  exports: [PeopleComponent],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }

