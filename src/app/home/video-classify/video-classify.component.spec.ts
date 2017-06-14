/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideoClassifyComponent } from './video-classify.component';

describe('VideoClassifyComponent', () => {
  let component: VideoClassifyComponent;
  let fixture: ComponentFixture<VideoClassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoClassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
