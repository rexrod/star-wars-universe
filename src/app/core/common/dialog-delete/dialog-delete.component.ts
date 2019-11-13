import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { DialogDelete } from './dialog-delete.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'fury-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogDeleteComponent implements AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDelete,
  private dialogRef: MatDialogRef<DialogDeleteComponent>,
            ) {
  }

  ngAfterViewInit() {

  }

  confirm() {
    this.dialogRef.close(this.data);
  }
}
