import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingformComponent } from './searchingform.component';

describe('SearchingformComponent', () => {
  let component: SearchingformComponent;
  let fixture: ComponentFixture<SearchingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
