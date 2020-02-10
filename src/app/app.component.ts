import { Component } from '@angular/core';
import { Subscription } from 'rxjs/';
import { MessageService } from './message.service';
import { HeroService } from './hero/hero.service';
import { RoutingTitleService }  from './routing-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroCount: number = 0;
  heroCountSubscription: Subscription;
  linkTitles: {} = {};

  constructor(public messageService: MessageService, private heroService: HeroService, private routingTitleService: RoutingTitleService) {}

  ngOnInit() {
    this.getLinkTitles();
    this.getHeroCount();
  }

  getLinkTitles() {
    this.routingTitleService.getTitles().subscribe(titles => this.linkTitles = titles);
  }
  getHeroCount() {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroCount = heroes.length;
      this.subscribeHeroCountChange();
    });
  }

  subscribeHeroCountChange(): void {
    if (!this.heroCountSubscription) {
      this.heroCountSubscription = this.heroService.heroCountChange$.subscribe(count => this.heroCount += count);
    }
  }
}
