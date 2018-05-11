import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes';

import { AgmCoreModule } from '@agm/core';
import { FileSelectDirective } from "ng2-file-upload";
import { AppComponent } from './app.component';
import { ThreadsService } from './threads.service';
import { ListThreadsComponent } from './list-threads/list-threads.component';
import { SessionService } from './session.service'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { OneThreadComponent } from './one-thread/one-thread.component';
import { PhotoLoadComponent } from './photo-load/photo-load.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    ListThreadsComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    OneThreadComponent,
    PhotoLoadComponent,
    FileSelectDirective,
    MapComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'environment.GOOGLE_KEY'
    })
  ],
  providers: [ThreadsService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
