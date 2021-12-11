import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { heroeDTO } from 'src/app/domain/dto/heroeDTO';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroImput : any = {};
  @Input() indexImput : number = 0;

  @Output() seleccionHeroe : EventEmitter<number>;
  @Output() mostrar = new EventEmitter();

  constructor(private router: Router) { 
    this.seleccionHeroe = new EventEmitter();
  }

  ngOnInit(): void {
  }

  getHeroes(){
    this.router.navigate(['heroes', this.indexImput]);
    //console.log(['heroe', this.indexImput]);
  }

  verDato(event: any, heroe: heroeDTO){
    this.mostrar.emit({heroe: heroe});
  }

}
