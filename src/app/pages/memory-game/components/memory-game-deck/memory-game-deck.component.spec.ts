import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryGameDeckComponent } from './memory-game-deck.component';

describe('MemoryGameDeckComponent', () => {
  let component: MemoryGameDeckComponent;
  let fixture: ComponentFixture<MemoryGameDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryGameDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryGameDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
