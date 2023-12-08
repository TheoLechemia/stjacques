import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichedetailComponent } from './fichedetail/fichedetail.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Accueil' } },
  {
    path: 'detail/:categorie/:id_fiche',
    component: FichedetailComponent,
    data: { breadcrumb: '@detail.name' },
  },
  {
    path: 'rechercher',
    component: SearchComponent,
    data: { breadcrumb: 'Page de recherche' },
  },
  {
    path: 'resultats',
    component: ResultsComponent,
    data: { breadcrumb: 'Resultat' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
