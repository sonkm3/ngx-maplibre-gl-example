import { Component } from '@angular/core';

import { NavComponent } from '../nav/nav.component';  
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MapContainerComponent } from '../map-container/map-container.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, SidenavComponent, MapContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
