import { Component, QueryList, ViewChildren } from '@angular/core';
import { LayerTooltipComponent } from './layer-tooltip/layer-tooltip.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren(LayerTooltipComponent) tooltipList: QueryList<LayerTooltipComponent>;

  title = 'tooltipCard';

  toggleTooltip(index): void {
    const target = this.tooltipList.toArray()[index].toggle();
    console.log(target);

  }

}
