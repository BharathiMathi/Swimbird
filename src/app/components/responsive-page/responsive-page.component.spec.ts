import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivePageComponent } from './responsive-page.component';

describe('ResponsivePageComponent', () => {
  let component: ResponsivePageComponent;
  let fixture: ComponentFixture<ResponsivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsivePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
