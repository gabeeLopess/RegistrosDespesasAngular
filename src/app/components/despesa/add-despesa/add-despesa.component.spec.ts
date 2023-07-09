import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDespesaComponent } from './add-despesa.component';

describe('AddDespesaComponent', () => {
  let component: AddDespesaComponent;
  let fixture: ComponentFixture<AddDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDespesaComponent]
    });
    fixture = TestBed.createComponent(AddDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
