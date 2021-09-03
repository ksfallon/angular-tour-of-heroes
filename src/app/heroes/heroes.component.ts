import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'; // Must import hero.service.ts b/c its where HEREOS is being imported from (Don't need HEROES import here anymore)

@Component({
  selector: 'app-heroes', //This is the name of the component and what is used when you want to insert it into HTML
  templateUrl: './heroes.component.html', //Here is the html page connected to hero.component.ts
  styleUrls: ['./heroes.component.css'] //Here is the css page connected to hero.component.ts
})
export class HeroesComponent implements OnInit { // HeroesComponent class is exported when it is initialized, should be connected to ngOnInit (line 19)

  selectedHero?: Hero; //if a Hero is selected it is Hero (the specific Hero)

  heroes: Hero[] = []; //the heroes property is not a declaration:- heroes is an array of Hero that we get from HeroService's which gets the array from mock-heroes.ts)

  constructor(private heroService: HeroService) { } //This is where we are INJECTING and calling on the hero.service.ts
  // When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  // ****** WHAT DOES THE LINE ABOVE MEAN?!? ******

  // here is our life cycle hook
  ngOnInit() { // Angular will call ngOnInit() at an appropriate time AFTER constructing a HeroesComponent instance (what is an instance??)
    this.getHeroes(); //it will call the getHeroes method inside of HeroesComponent after the HeroesComponent is constructed?
    console.log('this.getHeroes() is: ', this.getHeroes()) //this = HeroesComponent
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('hero clicked', hero)
  }

  getHeroes(): void { // Here is our method to RETRIEVE the heroes from the service (HeroService)
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes) //Now have added an Observable.subscribe, so it can not return Observable<Hero[]>
      // *** WE DID THIS BE before getHeroes was SYNCHRONOUS, which isn't likely for fetching data from a remote server with user input (it is with seeded data though), so it needs to be asynchronous

    console.log('this is: ', this) //this = HeroesComponent
    console.log('this.heroes is: ', this.heroes) //this.heroes = mock.heroes array
  }


}

//The new getHeroes() with subscribe, waits for the Observable to emit the array of heroes - which could happen now or several minutes from now.
// the subscribe method passes the emitted array to the callback, which sets the component's heroe's property.
// *** This ASYNCHRONOUS approach WILL WORK when the HeroService requests heroes from the server.
