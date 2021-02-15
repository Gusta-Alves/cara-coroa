import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSorteComponent } from './barra-sorte.component';

describe('BarraSorteComponent', () => {
  let component: BarraSorteComponent;
  let fixture: ComponentFixture<BarraSorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraSorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraSorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
