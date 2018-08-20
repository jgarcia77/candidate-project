import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailApiService {

  constructor(private http: HttpClient) { }

  public searchByName(searchValue: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.emailApiEndpoint}/search/${searchValue}`);
  }

  public submit(request): Observable<any> {
    return this.http.post(`${environment.emailApiEndpoint}/submit`, request);
  }
}
