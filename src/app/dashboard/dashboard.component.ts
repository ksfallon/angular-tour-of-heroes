import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero [] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}

// the class here is very similar to HeroesComponent class
// line 11 - defines a 'heroes' array property - Hero [] comes from the hero.ts which is essentially the model for heroes
// line 13 - the constructor calls for Angular to inject the HeroService into a private heroService property.
// line 15 - the ngOnInit method calls the getHeroes function.
// **but here the getHeroes function only returns the sliced list of heroes at positions 1 and 5 so onlu 4 of the Top Heroes (2nd,3rd, 4th, 5th) are displayed in the return
