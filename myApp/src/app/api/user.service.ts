import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=9fd75462682eb806be453a2d50108704`);
  }

  getMovieDetails(filmeId) {
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=9fd75462682eb806be453a2d50108704`);
  }
}
