import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routing
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true , onSameUrlNavigation: 'reload' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
