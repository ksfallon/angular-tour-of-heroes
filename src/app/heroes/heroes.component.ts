import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //Here we call on the Hero interface so we can create multiple heroes
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    skills: ['Flying', 'Creates Hurricanes', 'Great Hair']
  } ;

  constructor() { }

  // here is our life cycle hook
  ngOnInit(): void {
  }

}
