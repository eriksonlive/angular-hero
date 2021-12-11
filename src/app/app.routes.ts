import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/shared/home/home.component';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { AboutComponent } from './componets/about/about.component';
import { HeroeComponent } from './componets/heroe/heroe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes/:id', component: HeroeComponent },
    { path: 'search/:nombre', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });

