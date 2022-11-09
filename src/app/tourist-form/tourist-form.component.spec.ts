import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristFormComponent } from './tourist-form.component';

describe('TouristFormComponent', () => {
  let component: TouristFormComponent;
  let fixture: ComponentFixture<TouristFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
