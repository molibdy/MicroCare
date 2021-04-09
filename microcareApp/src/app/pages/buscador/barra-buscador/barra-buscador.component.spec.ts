import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraBuscadorComponent } from './barra-buscador.component';

describe('BarraBuscadorComponent', () => {
  let component: BarraBuscadorComponent;
  let fixture: ComponentFixture<BarraBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
