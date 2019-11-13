import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'planets',
        loadChildren: 'app/containers/planets/planets.module#PlanetsModule',
      },
      {
        path: 'people',
        loadChildren: 'app/containers/people/people.module#PeopleModule',
      },
      {
        path: 'species',
        loadChildren: 'app/containers/species/species.module#SpeciesModule',
      },
      {
        path: '**',
        loadChildren: 'app/containers/home/home.module#HomeModule',
        pathMatch: 'full'
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
