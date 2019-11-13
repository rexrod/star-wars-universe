import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DialogPanel } from './dialog-panel.model';

@Component({
  selector: 'fury-dialog-panel',
  templateUrl: './dialog-panel.component.html',
  styleUrls: ['./dialog-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogPanelComponent implements AfterViewInit {


  constructor() {
  }

  ngAfterViewInit() {

  }
}
