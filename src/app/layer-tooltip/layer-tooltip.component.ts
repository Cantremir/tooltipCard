import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layer-tooltip',
  templateUrl: './layer-tooltip.component.html',
  styleUrls: ['./layer-tooltip.component.scss']
})
export class LayerTooltipComponent {

  constructor() { }
  @ViewChild('layerTooltipCard', { static: true }) htmlEl: ElementRef;

  @Input() layerTitle: string;
  @Input() layerDescription: string;
  @Input() layerImageUrl: string;
  @Input() layerDetailsUrl: string;

  toggle() {
    this.htmlEl.nativeElement.hidden = !this.htmlEl.nativeElement.hidden;
  }

  navigateToLayerDetails(): void {
    window.open(this.layerDetailsUrl);
  }
}
