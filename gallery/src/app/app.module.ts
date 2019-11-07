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
import { PaginatorComponent } from './paginator/paginator.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { PeopleSearchPipe } from './pipes/people-search.pipe';
import { PeopleSearchComponent } from './people-search/people-search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    FooterComponent,
    PeopleListComponent,
    PersonSnippetComponent,
    PersonDetailsComponent,
    SpinnerComponent,
    PaginatorComponent,
    ErrorMessageComponent,
    PeopleSearchPipe,
    PeopleSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
