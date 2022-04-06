import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
    onScroll(event) {
      if(window.pageYOffset > 110){
        document.getElementById("item-filter").style.position = "fixed";
        document.getElementById("item-filter").style.top = "100px";
      } else{
        document.getElementById("item-filter").style.position = "relative";
        document.getElementById("item-filter").style.top = "0";
      }
    }

}
