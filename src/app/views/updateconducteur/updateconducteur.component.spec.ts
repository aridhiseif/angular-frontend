import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconducteurComponent } from './updateconducteur.component';

describe('UpdateconducteurComponent', () => {
  let component: UpdateconducteurComponent;
  let fixture: ComponentFixture<UpdateconducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateconducteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateconducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
