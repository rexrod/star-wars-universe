import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { fadeOutAnimation } from '../../core/common/route.animation';
import { PtBrLocale } from "app/intl/pt-br.locale";

@Component({
  selector: 'fury-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeOutAnimation],
})
export class HomeComponent implements OnInit, OnDestroy {

  audio: HTMLAudioElement;
  strings = PtBrLocale.home;

  constructor(
  ) {
    this.configureAudio();
  }

  configureAudio(){
    this.audio = new Audio();
    this.audio.src = "../../../assets/audio/sw_intro.mp3";
    this.audio.autoplay = true;
    this.audio.load();
  }

  ngOnInit() {
    this.playAudio();
  }

  ngOnDestroy() {
    this.stopAudio()
  }

  playAudio() {

    let promise = this.audio.play();

    if (promise !== undefined) {
      promise.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
        console.error('A nova política de autoplay do Google Chrome não permite reporduzir audio sem interações do usuário. \n'+
        'Permita em seu navegador o autoplay de audio e vídeo para uma melhor experiência. Veja em: chrome://flags/#autoplay-policy\n' +
        'O Firefox 70, onde foi testado este recurso, tem configurações de autoplay na barra de endereço.')
      })
    }
  }

  stopAudio() {
    this.audio.pause();
    this.audio = null;
  }
}