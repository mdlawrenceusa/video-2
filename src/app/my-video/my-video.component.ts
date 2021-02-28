import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-video',
  templateUrl: './my-video.component.html',
  styleUrls: ['./my-video.component.css']
})
export class MyVideoComponent implements OnInit {

fileToUpload: File = null;

handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}



  constructor() { }

  ngOnInit() {
  }

}