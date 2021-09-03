import { Injectable } from '@angular/core'; //This is automatic and its needed so we can inject HeroService into the root (app.component.ts)
import {Hero} from './hero';
import {HEROES} from './mock-heroes' //need to connect to the MockHeroes to get those seeds

@Injectable({
  providedIn: 'root' //Here is where HeroService is injected into the root at app.component.ts
})
export class HeroService { //Where we export all the information so other components can use it

  constructor() { }

  getHeroes(): Hero[] { //We are getting the array of hero objects (Hero[]) ie HEROES from the mock-heroes.ts
    return HEROES;
  }
}
