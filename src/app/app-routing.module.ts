import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent,   
    },
    { path: 'planets', loadChildren: './modules/planet/planet.module#PlanetModule' },
    // { path: 'spaceships', loadChildren: './modules/spaceship/spaceship.module#SpaceshipModule' },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,
            {  enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }