import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RsvpformComponent } from './components/rsvpform.component';
import { MaterialModule } from './material.module';
import { SearchComponent } from './components/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RsvpformComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
