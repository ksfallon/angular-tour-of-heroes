import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute, // ActivatedRoute holds info abut the route to this instance of the HeroDetailComponent. This component is interested in the route's parameter extracted from the URL. the "id" parameter is the id of the hero to display.
    private heroService: HeroService, //HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
    private location: Location, // location is an Angular service for interating with the browser.
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); //Line 34 starts explanations
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}

// a route.snapshot is a static image of the route info shortly after the component was created
// paramMap - a dictionary of route parameter values extracted from the URL. The "id" key returns the "id" of the hero to fetch
// Route parameters are always strings. The JS "Number" function converts the string to a number, which is what a hero id should be

