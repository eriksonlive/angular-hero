import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input() heroVista : any = {};
  public heroeDetalle : any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroeService:HeroesService ) {
    this.activatedRoute.params.subscribe(
      params =>{
        this.heroeDetalle = this.heroeService.getHeroe(params['id']);
      }
    );
  }

  ngOnInit(): void {}

}
