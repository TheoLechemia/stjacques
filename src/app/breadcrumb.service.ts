import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  Navigation,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged, map, tap } from 'rxjs/operators';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  public items: Array<BreadcrumbItem>;

  constructor(private _router: Router, private _route: ActivatedRoute) {
    this.items = [];
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe((ev) => {
        console.log('subscribeee');
        console.log(this._route);
        console.log((ev as any).url);

        const path = (ev as any).url;
        console.log('HOPPP', path);

        if (path == '/') {
          this.items = [
            {
              label: 'Accueil',
              path: '',
            },
          ];
        }
        if (path == '/rechercher') {
          this.items = [
            {
              label: 'Accueil',
              path: '',
            },
            {
              label: 'Page de recherche',
              path: '/rechercher',
            },
          ];
        }
        if (path == '/resultats') {
          this.items = [
            {
              label: 'Accueil',
              path: '',
            },
            {
              label: 'Page de recherche',
              path: '/rechercher',
            },
            {
              label: 'Resultats',
              path: '/rechercher',
            },
          ];
        }
        if (path.includes('detail')) {
          this.items = [
            {
              label: 'Accueil',
              path: '',
            },
            {
              label: 'Page de recherche',
              path: '/rechercher',
            },
            {
              label: 'Resultats',
              path: '/resultats',
            },
            {
              label: 'Détail',
            },
          ];
        }
      });
  }
}
