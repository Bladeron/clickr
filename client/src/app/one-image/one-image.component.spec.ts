/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneImageComponent } from './one-image.component';

describe('OneImageComponent', () => {
  let component: OneImageComponent;
  let fixture: ComponentFixture<OneImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
