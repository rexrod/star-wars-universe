import { Component, OnInit, isDevMode, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'fury-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('hover', [
      state('stop', style({
          transform: 'translateY(0)',
      })),
      state('play', style({
          transform: 'translateY(-75px)',
      })),
      transition('stop => play', animate('2000ms ease-in')),
  ]),
  ]
})
export class FooterComponent implements OnInit {

  visible: boolean;
  timeout: any;
  state = 'stop';

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onHover(event: MouseEvent) {

    if (event.type === 'mouseenter') {
      this.timeout = setTimeout(() => {
        this.state = 'play';
      }, 2000);

    }

    if (event.type === 'mouseleave') {
      clearTimeout(this.timeout);
      this.state = 'stop';
    }

  }

  constructor() {
   
  }

  ngOnInit() {

  }

  formattVersion(build): string {
    const date = build;
    // const date = this.versions;
    // Date formatting for footer
    const time = date.split(' ');
    const d = time[0].split('/');
    // const m = Utils.mesPorExtenso(d[1]);
    const hours = time[1];
    return 'Atualizado em ' + time[0] + ' às ' + hours;
    // return 'Atualizado em ' + d[0] + ' de ' + m.charAt(0).toUpperCase() + m.substr(1) + ' de ' + d[2] + ' às ' + hours;

  }
}
