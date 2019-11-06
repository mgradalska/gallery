import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MainPageComponent} from './main-page/main-page.component';
import {FooterComponent} from './footer/footer.component';
import {PeopleListComponent} from './people-list/people-list.component';
import {PersonSnippetComponent} from './person-snippet/person-snippet.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    FooterComponent,
    PeopleListComponent,
    PersonSnippetComponent,
    PersonDetailsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
