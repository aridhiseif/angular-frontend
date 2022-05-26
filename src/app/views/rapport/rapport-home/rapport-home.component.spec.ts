import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportHomeComponent } from './rapport-home.component';

describe('RapportHomeComponent', () => {
  let component: RapportHomeComponent;
  let fixture: ComponentFixture<RapportHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
