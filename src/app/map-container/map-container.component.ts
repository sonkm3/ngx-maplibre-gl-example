import { Component, Input } from '@angular/core';
import { MapComponent,
  GeoJSONSourceComponent,
  LayerComponent, ControlComponent, NavigationControlDirective, ScaleControlDirective} from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-map-container',
  imports: [MapComponent,
    GeoJSONSourceComponent,
    LayerComponent,
    ControlComponent, NavigationControlDirective, ScaleControlDirective],
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.css'
})
export class MapContainerComponent {
@Input() center: [number, number] = [0, 0];
@Input() zoom: number = 20;
}
