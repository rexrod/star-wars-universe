import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material-components.module';
import {DialogNoPanelComponent} from './dialog-no-panel.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [DialogNoPanelComponent],
  exports: [DialogNoPanelComponent]
})
export class DialogNoPanelModule {
}
