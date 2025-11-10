import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SportsApiService {
  private base = 'https://www.thesportsdb.com/api/v1/json/3';

  constructor(private http: HttpClient) {}

  // Próximos partidos de la liga (por id)
  getNextLeagueMatches(leagueId: string = '4328'): Observable<any> {
    return this.http.get(`${this.base}/eventsnextleague.php?id=${leagueId}`);
  }

  // Buscar ligas disponibles (opcional)
  getLeagues(): Observable<any> {
    return this.http.get(`${this.base}/all_leagues.php`);
  }
}
