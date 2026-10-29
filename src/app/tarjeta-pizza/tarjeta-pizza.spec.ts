import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaPizza } from './tarjeta-pizza';

describe('TarjetaPizza', () => {
  let component: TarjetaPizza;
  let fixture: ComponentFixture<TarjetaPizza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPizza],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaPizza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
