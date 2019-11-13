import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fury-dialog-no-panel',
  templateUrl: './dialog-no-panel.component.html',
  styleUrls: ['./dialog-no-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogNoPanelComponent implements AfterViewInit {


  constructor() {
  }

  ngAfterViewInit() {

  }
}
