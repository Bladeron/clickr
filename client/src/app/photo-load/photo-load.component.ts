import { Component, OnInit } from '@angular/core';
import { exif } from 'exif';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/api/images';

@Component({
  selector: 'app-photo-load',
  templateUrl: './photo-load.component.html',
  styleUrls: ['./photo-load.component.css']
})

export class PhotoLoadComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL
  });

  feedback: string;
  image: any;

  constructor() { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      console.log(item)
      console.log("La response es " +response)
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      console.log(response)
      console.log(item)
      //this.feedback = JSON.parse(response).message;
    };
  }

  submit() {
    console.log("submit")
    // console.log(this.uploader)
        this.uploader.uploadAll();
  }

}
