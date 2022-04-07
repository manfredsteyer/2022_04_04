import { Component, OnInit } from "@angular/core";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";

// import { Flight } from '../model/flight';


@Component({
  selector: 'flight-app', // <flight-app></flight-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Hello World!';
  loading = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      else if (event instanceof NavigationEnd
        || event instanceof NavigationError
        || event instanceof NavigationCancel) {

          this.loading = false;
      }


    });
  }

}

