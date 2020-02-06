import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent }   from './dashboard.component';
import { HeroModule } from '../hero/hero.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeroModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
