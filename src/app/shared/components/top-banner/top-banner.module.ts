
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBannerComponent } from './top-banner.component';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TopBannerComponent],
  entryComponents: [TopBannerComponent],
  exports: [TopBannerComponent],
  providers: [
  ]
})
export class TopBannerModule {}
