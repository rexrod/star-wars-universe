import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Page } from 'app/models/page.model';
import { environment } from 'environments/environment';
import { Configuration } from 'app/configuration';

@Injectable()
export class UrlService extends ApiService<any, Page<any>> {
    protected getPath(): string {
        return environment.origin.path ;
    }

    public configuration = new Configuration();

    findByUrl(
        url = ''
      ): Observable<Page<any>> {
        return this.httpClient.get<Page<any>>(this.getPath() + url).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findByUrlWithoutPath(
        url = ''
      ): Observable<Page<any>> {
        return this.httpClient.get<Page<any>>(url).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }
   
}
