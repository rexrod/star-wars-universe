import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material-components.module';
import {DialogInfoComponent} from './dialog-info.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [DialogInfoComponent],
  entryComponents: [DialogInfoComponent],
  exports: [DialogInfoComponent]
})
export class DialogInfoModule {
}
