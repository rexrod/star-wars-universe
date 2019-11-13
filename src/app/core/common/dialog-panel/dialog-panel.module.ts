import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material-components.module';
import {DialogPanelComponent} from './dialog-panel.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [DialogPanelComponent],
  exports: [DialogPanelComponent]
})
export class DialogPanelModule {
}
