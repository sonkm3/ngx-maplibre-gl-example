import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NavComponent } from '../nav/nav.component';  
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MapContainerComponent } from '../map-container/map-container.component';

import {
  GeoJSONSourceComponent,
} from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-home',
  imports: [NavComponent, SidenavComponent, MapContainerComponent, GeoJSONSourceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


@Injectable({providedIn: 'root'})
export class HomeComponent {

  constructor(private http: HttpClient) {
    http.get('./tokyo.place.mini.geo.json').subscribe(place => {
      const data = place as GeoJSON.FeatureCollection<GeoJSON.Point>;
      console.log(data.features);
    });
  }


}
