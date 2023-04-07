import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAPIComponent } from './recipe-api.component';

describe('RecipeAPIComponent', () => {
  let component: RecipeAPIComponent;
  let fixture: ComponentFixture<RecipeAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
