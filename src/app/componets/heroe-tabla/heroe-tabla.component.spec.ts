/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroeTablaComponent } from './heroe-tabla.component';

describe('HeroeTablaComponent', () => {
  let component: HeroeTablaComponent;
  let fixture: ComponentFixture<HeroeTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
