import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { PlanetComponent } from './modules/planet/components/planet/planet.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            // { path: 'planets', component: PlanetComponent },
        ]
    }

    // { path: 'spaceships', loadChildren: './modules/spaceship/spaceship.module#SpaceshipModule' },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }