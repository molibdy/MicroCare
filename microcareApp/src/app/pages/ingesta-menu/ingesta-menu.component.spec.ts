import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestaMenuComponent } from './ingesta-menu.component';

describe('IngestaMenuComponent', () => {
  let component: IngestaMenuComponent;
  let fixture: ComponentFixture<IngestaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngestaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngestaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
