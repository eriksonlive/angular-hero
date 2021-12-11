import { Injectable } from '@angular/core';
import { heroeDTO } from '../domain/dto/heroeDTO';
import { HeroesData } from '../domain/mocks/data';

@Injectable()
export class HeroesService {

  heroes = HeroesData;

  constructor(){}

  getHeroes(){
    return this.heroes;
  }

  getHeroe(id: any) {
    let resp = this.heroes.find(heroe => heroe.idx == id);
    return resp;
  }

}


