import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyVideoComponent } from './my-video/my-video.component';

@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
      RouterModule.forRoot([
      { path: '', component: HelloComponent },
    ])
  ],
  declarations: [
     AppComponent,
     HelloComponent,
     MyVideoComponent 
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
