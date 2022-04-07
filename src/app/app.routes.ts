import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BasketComponent } from "./basket/basket.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";


export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'basket',
        component: BasketComponent,
        outlet: 'aux'
    },

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }


];