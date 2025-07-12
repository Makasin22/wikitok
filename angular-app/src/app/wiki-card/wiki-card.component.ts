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
  @Output() share = new EventEmitter<WikiArticle>();

  toggleLike() {
    this.like.emit(this.article);
  }

  shareArticle() {
    this.share.emit(this.article);
  }
}
