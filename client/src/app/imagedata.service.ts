import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class ImagedataService {
  
  constructor(private http: Http) { }
  
  oneImage(id) {
    return this.http.get(`${BASE_URL}/api/images/${id}`)
      .map((imageData) => imageData.json());
  }

  getImages(){
    return this.http.get(`${BASE_URL}/api/images/all`)
      .map((res) => res.json());
  }
}
