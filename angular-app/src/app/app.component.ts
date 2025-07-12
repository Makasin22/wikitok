import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { LikedArticlesService } from './liked-articles.service';
import type { WikiArticle } from './wiki-card/wiki-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles: WikiArticle[] = [];
  loading = false;

  constructor(
    private wiki: WikiService,
    public liked: LikedArticlesService
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.wiki.getRandomArticles().subscribe(arts => {
      this.articles.push(...arts);
      this.loading = false;
    });
  }

  toggleLike(article: WikiArticle) {
    this.liked.toggle(article);
  }
}
