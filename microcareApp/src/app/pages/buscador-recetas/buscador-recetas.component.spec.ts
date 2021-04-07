import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorRecetasComponent } from './buscador-recetas.component';

describe('BuscadorRecetasComponent', () => {
  let component: BuscadorRecetasComponent;
  let fixture: ComponentFixture<BuscadorRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
