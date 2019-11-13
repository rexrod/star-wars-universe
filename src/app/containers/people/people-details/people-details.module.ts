
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
} from '@angular/material';
import { PeopleDetailsComponent } from './people-details.component';
import { TopBannerModule } from 'app/shared/components/top-banner/top-banner.module';
import { PeopleService } from 'app/service/people.service';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    TopBannerModule
  ],
  declarations: [PeopleDetailsComponent],
  entryComponents: [PeopleDetailsComponent],
  exports: [PeopleDetailsComponent],
  providers: [
    PeopleService
  ]
})
export class PeopleDetailsModule {}

