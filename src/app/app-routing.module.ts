import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichedetailComponent } from './fichedetail/fichedetail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'detail/:categorie/:id_fiche',
    component: FichedetailComponent,
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
