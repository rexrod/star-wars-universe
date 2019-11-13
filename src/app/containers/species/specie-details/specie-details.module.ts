
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
} from '@angular/material';
import { SpecieDetailsComponent } from './specie-details.component';
import { TopBannerModule } from 'app/shared/components/top-banner/top-banner.module';
import { SpecieService } from 'app/service/specie.service';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    TopBannerModule
  ],
  declarations: [SpecieDetailsComponent],
  entryComponents: [SpecieDetailsComponent],
  exports: [SpecieDetailsComponent],
  providers: [
    SpecieService
  ]
})
export class SpecieDetailsModule {}

