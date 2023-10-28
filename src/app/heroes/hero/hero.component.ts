import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public hero: string = 'SpideMan';
  public name: string = 'Peter Parker';
  public age:  number = 25;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{
    // return this.name + ' - ' + this.age + ' años';
    return `${ this.name } - ${ this.age } años`;
  }

  changeHero():void{
    this.hero = 'IronMan';
    this.name = 'Tony Stark';
  }

  changeAge():void{
    this.age = 45;
  }

  resetHero():void{
    this.hero = 'SpiderMan';
    this.name = 'Peter Parker'
    this.age = 25;

    // //Cambia el pimer H1
    // document.querySelector('h1')!.innerHTML = '<h1>Cambio desde angular</h1>';

    // //Cambia todos los H1
    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML = '<h1>Cambios desde Angular</h1>';
    // })
  }

}
