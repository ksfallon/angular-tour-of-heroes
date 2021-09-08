import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // imports these so the application can have routing functionality.
import { HeroesComponent } from './heroes/heroes.component'; // will give the Router somewhere to go once routes are configured.
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

// this is our routes array, since we imported HeroesComponent we can create a route for it
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // the route directs a URL that fully maatches the empty path to the route whose path is '/dashboard'
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent}, //the colon (:) in the path indicates that :id is a placeholder for a specific hero id. this is a parameterized route to the routes array that matches the path pattern to the hero detail view
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // you configure the router at the application's root level.the forRoot method supplies the service providers and directives needed for routing, and performs the intial navigation based on the current browser URL.
  exports: [RouterModule] // it is exported so its available throughout the application
})
export class AppRoutingModule { }

// Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
// Angular Routes have two properties:
// - path: a string that matches the URL in the browser address bar.
// - component: the component that the router should create when navigating to this route
//  This tells the router to math that URL to 'path: heroes' and display the 'HeroesComponent' when the URL is something like 'localhost:4200/heroes'
