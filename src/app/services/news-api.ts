import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private base = environment.newsApi.baseUrl;
  private apiKey = environment.newsApi.apiKey;

  constructor(private http: HttpClient) {}

  getSportsHeadlines(country = 'us', pageSize = 20): Observable<any> {
    const params = new HttpParams()
      .set('category', 'sports')
      .set('country', country)
      .set('pageSize', String(pageSize))
      .set('apiKey', this.apiKey);
    return this.http.get(`${this.base}/top-headlines`, { params });
  }
}
