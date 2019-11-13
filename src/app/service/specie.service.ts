import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Specie } from 'app/models/specie.model';
import { Page } from 'app/models/page.model';
import { environment } from 'environments/environment';
import { Configuration } from 'app/configuration';
export const url = {
    SPECIES: 'species/',
}

@Injectable()
export class SpecieService extends ApiService<Specie, Page<Specie>> {
    protected getPath(): string {
        return environment.origin.path + url.SPECIES;
    }

    public configuration = new Configuration();

    findAllSpecies(
        page = 1,
      ): Observable<Page<Specie>> {
        return this.httpClient.get<Page<Specie>>(this.getPath(), {
            params: new HttpParams()
                .set('page', page.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

   
}
