import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Configuration } from '../../../configuration';
import { Home } from '../../../models/home.model';
import { Page } from '../../../models/page.model';
import { ApiService } from '../../../service/api.service';
import { environment } from '../../../../environments/environment';

export const url = {
    PEOPLE: 'people/',
}

@Injectable()
export class HomeService extends ApiService<Home, Page<Home>> {
    protected getPath(): string {
        return environment.origin.home + url.PEOPLE;
    }

    public configuration = new Configuration();

    findAllPeople(
        page = 1
      ): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath(), {
            params: new HttpParams()
                .set('page', page.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findNewsByCompanyId(
        companyId: number,
        count = 10,
        page = 0,
        type = 'code',
        filter = '',
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath() + '/news/company/' + companyId, {
            params: new HttpParams()
                .set('count', count.toString())
                .set('page', page.toString())
                .set('type', type.toString())
                .set('filter', filter.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findPendingByCompanyId(
        companyId: number,
        count = 10,
        page = 0,
        type = 'code',
        filter = '',
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath() + '/peding/company/' + companyId, {
            params: new HttpParams()
                .set('count', count.toString())
                .set('page', page.toString())
                .set('type', type.toString())
                .set('filter', filter.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findInProgressByCompanyId(
        companyId: number,
        count = 10,
        page = 0,
        type = 'code',
        filter = '',
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath() + '/progress/company/' + companyId, {
            params: new HttpParams()
                .set('count', count.toString())
                .set('page', page.toString())
                .set('type', type.toString())
                .set('filter', filter.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findCanceledByCompanyId(
        companyId: number,
        count = 10,
        page = 0,
        type = 'code',
        filter = '',
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath() + '/canceled/company/' + companyId, {
            params: new HttpParams()
                .set('count', count.toString())
                .set('page', page.toString())
                .set('type', type.toString())
                .set('filter', filter.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findSolvedForAssistantByCompanyId(
        companyId: number,
        count = 10,
        page = 0,
        type = 'code',
        filter = '',
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath() + '/solved/company/' + companyId, {
            params: new HttpParams()
                .set('count', count.toString())
                .set('page', page.toString())
                .set('type', type.toString())
                .set('filter', filter.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findAllForEmployeeByCompanyId(
        employeeId: number,
        companyId: number,
        profileIdEnum: number,
        count = 10,
        page = 0,
        type = 'code',
        filter = '',
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath() + '/employeer/' + employeeId, {
            params: new HttpParams()
                .set('idCompany', companyId.toString())
                .set('profileIdEnum', profileIdEnum.toString())
                .set('count', count.toString())
                .set('page', page.toString())
                .set('type', type.toString())
                .set('filter', filter.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findOpenForRequesterByCompanyId(
        employeeId: number,
        companyId: number,
        count = 10,
        page = 0,
        type = 'code',
        filter = '',
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath() + '/openRequester/company/' + companyId + '/employee/' + employeeId, {
            params: new HttpParams()
                .set('count', count.toString())
                .set('page', page.toString())
                .set('type', type.toString())
                .set('filter', filter.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }

    findSolvedForRequesterByCompanyId(
        employeeId: number,
        companyId: number,
        count = 10,
        page = 0,
        type = 'code',
        filter = '',
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.get<Page<Home>>(this.getPath() + '/solvedRequester/company/' + companyId + '/employee/' + employeeId, {
            params: new HttpParams()
                .set('count', count.toString())
                .set('page', page.toString())
                .set('type', type.toString())
                .set('filter', filter.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }


    findDashboardCountsForAssistant(
        companyId: number
    ): any {
        return this.httpClient.get(this.getPath() + '/dashboard/' + companyId)
            .pipe(
                map(response => {
                    const data = response;
                    return data;
                }));
    }

    findDashboardCountsForResquester(
        companyId: number,
        employeeId: number
    ): any {
        return this.httpClient.get(this.getPath() + '/dashboard/' + companyId + '/employee/' + employeeId)
            .pipe(
                map(response => {
                    const data = response;
                    return data;
                }));
    }

    findByFilters(
        employeeId: number,
        serviceOrderQuery: {
            idRequester: number | null,
            idDepartment: number | null,
            idCompany: number | null,
            idTechnician1: number | null,
            idTechnician2: number | null,
            status: number | null,
            idHomePriority: number | null,
            idHomeType: number | null,
            startDate: string | null,
            endDate: string | null
        },
        count = 10,
        page = 0,
        direction = 'DESC'): Observable<Page<Home>> {
        return this.httpClient.post<Page<Home>>(this.getPath() + '/filter/pagination',
            JSON.stringify(serviceOrderQuery), {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('idEmployee', employeeId.toString()),
            params: new HttpParams()
                .set('count', count.toString())
                .set('page', page.toString())
                .set('direction', direction.toString())
        }).pipe(
            map(response => {
                const data = response;
                return data;
            }));
    }
}
