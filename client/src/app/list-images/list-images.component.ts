import { Component, OnInit } from '@angular/core';
import { ImagedataService } from '../imagedata.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {

  images: Array<any>;

  constructor(public retrieveImages: ImagedataService) { }

  ngOnInit() {
    this.retrieveImages.getImages()
    .subscribe(images => this.images = images)
  }

}
