import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCastCardComponent } from './movie-cast-card.component';

describe('MovieCastCardComponent', () => {
  let component: MovieCastCardComponent;
  let fixture: ComponentFixture<MovieCastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCastCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
