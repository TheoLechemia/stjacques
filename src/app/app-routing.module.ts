import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichedetailComponent } from './fichedetail/fichedetail.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'detail/:categorie/:id_fiche',
    component: FichedetailComponent,
  },
  { path: 'rechercher', component: SearchComponent },
  { path: 'resultats', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
