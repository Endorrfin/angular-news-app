import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = environment.news_api.api_key;

  constructor(public http: HttpClient) { }

  getNewsByCountryAndCategory(country, category) {
    // return this.http.get(`http://newsapi.org/v2/top-headlines?country=${country}ua&category=${category}technology&apiKey=${this.api_key}`)
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.api_key}`);
  }

}
