import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxCheckboxComponentComponent } from './dx-checkbox-component.component';

describe('DxCheckboxComponentComponent', () => {
  let component: DxCheckboxComponentComponent;
  let fixture: ComponentFixture<DxCheckboxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DxCheckboxComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DxCheckboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
