import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Planet } from 'app/models/planet.model';
import { Page } from 'app/models/page.model';
import { environment } from 'environments/environment';
import { Configuration } from 'app/configuration';
export const url = {
    PLANET: 'planets/',
}

@Injectable()
export class PlanetService extends ApiService<Planet, Page<Planet>> {
    protected getPath(): string {
        return environment.origin.path + url.PLANET;
    }

    public configuration = new Configuration();

    findAllPlanets(
        page = 1,
        url = ''
      ): Observable<Page<Planet>> {
        return this.httpClient.get<Page<Planet>>(this.getPath(), {
            params: new HttpParams()
                .set('page', page.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

   
}
