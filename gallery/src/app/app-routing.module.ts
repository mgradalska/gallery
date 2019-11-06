import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {PeopleListComponent} from './people-list/people-list.component';
import {PersonDetailsComponent} from './person-details/person-details.component';


const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'people/page/:page', component: PeopleListComponent},
  {path: 'people/:id', component: PersonDetailsComponent},
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {path: '**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
