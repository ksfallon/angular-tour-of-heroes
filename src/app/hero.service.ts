import { Injectable } from '@angular/core'; //This is automatic and its needed so we can inject HeroService into the root (app.component.ts)
import { Observable, of } from 'rxjs'; //- Observable is one of the key classes in the RxJS library
import {Hero} from './hero';
import {HEROES} from './mock-heroes'; //need to connect to the MockHeroes to get those seeds
import {MessageService} from './message.service';

@Injectable({ providedIn: 'root' }) //Here is where HeroService is injected into the root at app.component.ts
export class HeroService { //Where we export all the information so other components can use it

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')  //We are getting the array of hero objects (Hero[]) ie HEROES from the mock-heroes.ts and using the Observable.of method to make it asynchronous
    return heroes; // of(HEROES) returns an Observable<Hero[]> that emits a SINGLE VALUE which is the array of mock-heroes.
  }

  getHero(id: number):Observable<Hero> { // NOTES start on line 32
    // FOR NOW, assume that a hero with the specified id always exists.
    // ERROR handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`); // NEED BACKTICKS for the JS template literal
    return of (hero)
  }
}

//WHEN USING HTTP - i'll call HttpClient.get<Hero[]>() instead, and this also returns an Observable<Hero[]>
// that also emits a SINGLE VALUE, which is an array of heroes from the body of the HTTP response (input from the user)

// getHero has an asynchronous signature - it returns 'mock hero' as an 'Observable' using the RxJS 'of()' funtion
