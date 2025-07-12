import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface WikiArticle {
  title: string;
  displaytitle: string;
  extract: string;
  pageid: number;
  url: string;
  thumbnail?: { source: string; width: number; height: number };
}

@Component({
    selector: 'app-wiki-card',
    templateUrl: './wiki-card.component.html',
    styleUrls: ['./wiki-card.component.css'],
    standalone: false
})
export class WikiCardComponent {
  @Input() article!: WikiArticle;
  @Input() liked = false;
  @Output() like = new EventEmitter<WikiArticle>();
  // Share event emitter is kept for potential parent handling
  @Output() share = new EventEmitter<WikiArticle>();

  toggleLike() {
    this.like.emit(this.article);
  }

  shareArticle() {
    const { displaytitle, url, extract } = this.article;
    const nav: any = navigator;
    if (nav.share) {
      nav.share({ title: displaytitle, text: extract, url }).catch(() => {});
    } else if (nav.clipboard) {
      nav.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
    this.share.emit(this.article);
  }
}
