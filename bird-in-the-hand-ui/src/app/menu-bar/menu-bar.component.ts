import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  /*
    This component is a simple menu bar that allows the user to navigate between different sections of the application.
    It uses Angular's routerLink directive to navigate to different routes. Once the processing layer has been added, RouteGuard 
    can be added to prevent access to certain routes if the user is not logged in.
  */

}
