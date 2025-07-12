import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { WikiService } from './wiki.service';
import { LikedArticlesService } from './liked-articles.service';
import type { WikiArticle } from './wiki-card/wiki-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  articles: WikiArticle[] = [];
  loading = false;
  private observer?: IntersectionObserver;
  @ViewChild('observer', { static: false }) observerElem!: ElementRef<HTMLDivElement>;

  constructor(
    private wiki: WikiService,
    public liked: LikedArticlesService
  ) {}

  ngOnInit() {
    this.load();
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting && !this.loading) {
        this.load();
      }
    }, { rootMargin: '100px' });

    if (this.observerElem) {
      this.observer.observe(this.observerElem.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
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
