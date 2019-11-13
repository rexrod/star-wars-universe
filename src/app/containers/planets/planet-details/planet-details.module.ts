
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
} from '@angular/material';
import { PlanetDetailsComponent } from './planet-details.component';
import { TopBannerModule } from 'app/shared/components/top-banner/top-banner.module';
import { PlanetService } from 'app/service/planet.service';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    TopBannerModule
  ],
  declarations: [PlanetDetailsComponent],
  entryComponents: [PlanetDetailsComponent],
  exports: [PlanetDetailsComponent],
  providers: [
    PlanetService
  ]
})
export class PlanetDetailsModule {}

