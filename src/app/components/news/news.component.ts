import { Component, OnInit } from '@angular/core';
import {NewsApiService} from "../../services/news-api.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  newsList;
  currentCountry = 'ua'; // default country is Ukraine
  currentCategory = 'health'; // default category is Health
  countryList = ['ua', 'us', 'pl', 'ca', 'gb', 'kz', 'ru']; // country list for country select
  categoryList = ['business', 'entertainment', 'health', 'science', 'sports', 'technology']; // category list for category select


  constructor(public news: NewsApiService) { }

  ngOnInit(): void {
    // Get news
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      console.log(news);
      this.newsList = news['articles'];
    });
  }

  onChangeCountry() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });
  }

  onChangeCategory() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });
  }

}
