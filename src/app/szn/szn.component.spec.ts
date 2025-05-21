import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SznComponent } from './szn.component';

describe('SznComponent', () => {
  let component: SznComponent;
  let fixture: ComponentFixture<SznComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SznComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SznComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
