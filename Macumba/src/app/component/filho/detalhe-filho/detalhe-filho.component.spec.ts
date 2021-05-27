import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheFilhoComponent } from './detalhe-filho.component';

describe('DetalheFilhoComponent', () => {
  let component: DetalheFilhoComponent;
  let fixture: ComponentFixture<DetalheFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
