import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrrentComponent } from './currrent.component';

describe('CurrrentComponent', () => {
  let component: CurrrentComponent;
  let fixture: ComponentFixture<CurrrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
