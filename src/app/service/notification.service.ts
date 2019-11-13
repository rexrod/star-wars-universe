import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PtBrLocale } from 'app/intl/pt-br.locale';
import { AppConfig } from 'app/app-config';

@Injectable()
export class NotificationService {

    constructor(public snackBar: MatSnackBar) { }

    firstItemAlert(){
        this.snackBar.open(PtBrLocale.message.firstItem, PtBrLocale.actions.buttonOk, { duration: AppConfig.message.duration})
    }

    errorMessage(error){
        let message = error && error.error && error.error.detail || PtBrLocale.message.loadError;
        this.snackBar.open(message, PtBrLocale.actions.buttonOk, { duration: AppConfig.message.duration})
    }

}