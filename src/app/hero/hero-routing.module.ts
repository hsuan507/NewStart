import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';
import { HeroesComponent }   from './heroes/heroes.component';

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
