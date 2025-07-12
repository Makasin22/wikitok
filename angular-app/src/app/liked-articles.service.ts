import { Injectable } from '@angular/core';
import type { WikiArticle } from './wiki-card/wiki-card.component';

@Injectable({ providedIn: 'root' })
export class LikedArticlesService {
  private key = 'likedArticles';
  private liked: WikiArticle[] = [];

  constructor() {
    const saved = localStorage.getItem(this.key);
    this.liked = saved ? JSON.parse(saved) : [];
  }

  toggle(article: WikiArticle) {
    const idx = this.liked.findIndex(a => a.pageid === article.pageid);
    if (idx >= 0) {
      this.liked.splice(idx, 1);
    } else {
      this.liked.push(article);
    }
    localStorage.setItem(this.key, JSON.stringify(this.liked));
  }

  isLiked(id: number) {
    return this.liked.some(a => a.pageid === id);
  }

  get articles() {
    return this.liked;
  }
}
