import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerTooltipComponent } from './layer-tooltip.component';

describe('LayerTooltipComponent', () => {
  let component: LayerTooltipComponent;
  let fixture: ComponentFixture<LayerTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
