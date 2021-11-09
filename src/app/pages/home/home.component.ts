import { OnInit } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
// install Swiper modules
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
