import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public xMen:string[] = ['Wolverine','Ciclops','Beast','Gambit'];

  public simbiontes:string[] = ['Spiderman','Venom','Carnage'];

  public villains:string[] = ['Magneto','Loki','Deadpoll'];

  public deletedXmen?: string;
  public deletedSimbionte?:string;
  public deletedVillain?:string;

  removeLastXmen():void{
    this.deletedXmen = this.xMen.pop();
    console.log('X-Men eliminado: ', this.deletedXmen);
  }

  removeFirstSimbionte():void{
    this.deletedSimbionte = this.simbiontes.shift();
    console.log('Simbionte eliminado: ', this.deletedSimbionte);
  }

  removeLastVillain():void{
    this.deletedVillain = this.villains.pop();
    console.log('Villano eliminado: ', this.deletedVillain);
  }
}
