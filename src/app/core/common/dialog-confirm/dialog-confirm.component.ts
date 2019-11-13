import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DialogConfirm } from './dialog-confirm.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'fury-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogConfirmComponent implements AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogConfirm,
  private dialogRef: MatDialogRef<DialogConfirmComponent>,
            ) {
  }

  ngAfterViewInit() {

  }

  confirm() {
    this.dialogRef.close(this.data);
  }
}
