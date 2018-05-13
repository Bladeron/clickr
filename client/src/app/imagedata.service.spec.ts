/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImagedataService } from './imagedata.service';

describe('Service: Imagedata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagedataService]
    });
  });

  it('should ...', inject([ImagedataService], (service: ImagedataService) => {
    expect(service).toBeTruthy();
  }));
});
