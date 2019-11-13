import { AfterViewInit, Component, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogInfo } from './dialog-info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'fury-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogInfoComponent implements AfterViewInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogInfo,
    private router: Router,
    private dialogRef: MatDialogRef<DialogInfoComponent>,
  ) {
  }

  close(data){
    this.dialogRef.close(data)
  }

  redirectTo(){
    if (this.data.redirectTo){
      this.router.navigate([this.data.redirectTo]);
      this.dialogRef.close();
    }
  }

  ngAfterViewInit() {

  }
}
