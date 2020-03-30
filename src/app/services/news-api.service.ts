import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = environment.news_api.api_key;

  constructor(public http: HttpClient) { }
}
