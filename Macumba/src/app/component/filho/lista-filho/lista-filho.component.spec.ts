import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilhoComponent } from './lista-filho.component';

describe('ListaFilhoComponent', () => {
  let component: ListaFilhoComponent;
  let fixture: ComponentFixture<ListaFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
