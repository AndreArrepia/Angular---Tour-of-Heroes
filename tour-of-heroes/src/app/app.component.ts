import { Component } from '@angular/core';

@Component({
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div>
    <label>Name:</label>
    <input [(ngModel)]="hero.name" placeholder='name'>
  </div>
  <div><label>ID: {{hero.id}}</label></div>
  `,
  selector: 'app-root',
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
  id: 1,
  name: 'Windstorm',
  }
}

export class Hero {
  id: number;
  name: string;
}
