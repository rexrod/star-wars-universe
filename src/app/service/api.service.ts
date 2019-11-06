import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class ApiService<T, D> {
  constructor(protected httpClient: HttpClient) { }

  protected abstract getPath(): string;

}
