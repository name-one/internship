/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputformComponent } from './inputform.component';

describe('InputformComponent', () => {
  let component: InputformComponent;
  let fixture: ComponentFixture<InputformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
