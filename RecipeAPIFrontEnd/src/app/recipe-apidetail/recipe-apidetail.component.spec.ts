import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAPIDetailComponent } from './recipe-apidetail.component';

describe('RecipeAPIDetailComponent', () => {
  let component: RecipeAPIDetailComponent;
  let fixture: ComponentFixture<RecipeAPIDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeAPIDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeAPIDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
