import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapicBarComponent } from './grapic-bar.component';

describe('GrapicBarComponent', () => {
  let component: GrapicBarComponent;
  let fixture: ComponentFixture<GrapicBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapicBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapicBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
