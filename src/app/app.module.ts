import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyVideoComponent } from './my-video/my-video.component';
import { FileUploadService } from './file-upload.service';
import { FileUploadComponent } from './file-upload/file-upload.component';

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
     MyVideoComponent,
     FileUploadComponent 
     ],
  bootstrap:    [ AppComponent ],
  providers: [FileUploadService]
})
export class AppModule { }
