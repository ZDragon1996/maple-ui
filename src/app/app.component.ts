import { HostListener } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maple-fashion';

  @HostListener('window:scroll', ['$event'])
    onScroll(event) {
      var prevScrollpos = window.pageYOffset;
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("app-header").style.top = "0";
      } else {
        document.getElementById("app-header").style.top = "-40px";
      }
      prevScrollpos = currentScrollPos;
    }

}
