import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public filterPost = {}

  constructor(private router: Router) {
    console.warn('construtor listo');
  }

  ngOnInit(): void {
    console.log("ngOnInit listo");
  }

  buscar(buscar: any) {
    this.router.navigate(['search/', buscar]);
  }

}
