import { Component } from '@angular/core';
import { Subscription } from 'rxjs/';
import { MessageService } from './message.service';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroCount: number = 0;
  heroCountSubscription: Subscription;

  constructor(public messageService: MessageService, private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroCount();
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
