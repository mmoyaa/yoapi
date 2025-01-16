import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaproductComponent } from './vistaproduct.component';

describe('VistaproductComponent', () => {
  let component: VistaproductComponent;
  let fixture: ComponentFixture<VistaproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaproductComponent]
    });
    fixture = TestBed.createComponent(VistaproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
