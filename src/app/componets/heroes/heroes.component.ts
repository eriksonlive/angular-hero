import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroeDTO } from 'src/app/domain/dto/heroeDTO';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {

  heroes: heroeDTO[] = [];
  heroesTabla: heroeDTO[] = [];
  public tabla: boolean;
  public title: string;
  public H: any = {};
  public result: any = "";

  constructor(private myheroeSer: HeroesService, private activarRuta: ActivatedRoute) {
    this.tabla = true;
    this.title = 'tabla';
    this.activarRuta.params.subscribe(
      res => {
        this.activarRuta = res['nombre'];
      }, error => {
        this.activarRuta = error;
      }
    );
  }


 // {
   // next: (res) => this.result = res['nombre'],
   // error: (err) => console.log(err)
// }

  ngOnInit(): void {
    this.heroes = this.obtenerHeroes();
  }

  obtenerHeroes(): heroeDTO[] {
    return this.myheroeSer.getHeroes();
  }

  verTabla() {
    if (this.tabla) {
      this.tabla = false;
      this.title = 'grid';
    } else {
      this.tabla = true;
      this.title = 'tabla';
    }
  }

  heroTable() {
    this.heroesTabla = this.heroes;
  }

  mostrarD(event: any) {
    this.H = event.heroe;
  }

}
