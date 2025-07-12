import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import type { WikiArticle } from './wiki-card/wiki-card.component';

@Injectable({ providedIn: 'root' })
export class WikiService {
  constructor(private http: HttpClient) {}

  getRandomArticles(): Observable<WikiArticle[]> {
    const params = new HttpParams({ fromObject: {
      action: 'query', format: 'json', generator: 'random',
      grnnamespace: '0', prop: 'extracts|info|pageimages', inprop: 'url',
      grnlimit: '20', exintro: '1', exlimit: 'max', exsentences: '5', explaintext: '1',
      piprop: 'thumbnail', pithumbsize: '800', origin: '*'
    }});
    return this.http.get<any>('https://neolurk.org/w/api.php?', { params }).pipe(
      map(res => Object.values(res.query.pages).map((page: any) => ({
        title: page.title,
        displaytitle: page.title,
        extract: page.extract,
        pageid: page.pageid,
        thumbnail: page.thumbnail,
        url: page.canonicalurl
      })).filter((a: WikiArticle) => a.thumbnail && a.url && a.extract))
    );
  }
}
