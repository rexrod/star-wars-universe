import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { People } from 'app/models/people.model';
import { Page } from 'app/models/page.model';
import { environment } from 'environments/environment';
import { Configuration } from 'app/configuration';
export const url = {
    PEOPLE: 'people/',
}

@Injectable()
export class PeopleService extends ApiService<People, Page<People>> {
    protected getPath(): string {
        return environment.origin.path + url.PEOPLE;
    }

    public configuration = new Configuration();

    findAllPeople(
        page = 1,
        url = ''
      ): Observable<Page<People>> {
        return this.httpClient.get<Page<People>>(this.getPath(), {
            params: new HttpParams()
                .set('page', page.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

   
}
