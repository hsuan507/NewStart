import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';
import { HeroSearchComponent }   from './hero-search/hero-search.component';
import { HeroesComponent }   from './heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [HeroDetailComponent, HeroesComponent, HeroSearchComponent],
  exports: [HeroSearchComponent],
})
export class HeroModule { }
