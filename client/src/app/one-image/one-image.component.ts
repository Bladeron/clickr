import { Component, OnInit } from '@angular/core';
import { ImagedataService } from '../imagedata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one-image',
  templateUrl: './one-image.component.html',
  styleUrls: ['./one-image.component.css']
})
export class OneImageComponent implements OnInit {

  imageId: string;
  imageSingle: any;

  constructor(
    public retrieveImages: ImagedataService,
    private route: ActivatedRoute, 
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.imageId = params['id'];
  });
    this.retrieveImages.oneImage(this.imageId).subscribe(image => {
      this.imageSingle = image
      console.log(this.imageSingle)
    });
    
}

}
