import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import * as $ from "jquery";

// install Swiper modules
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
 
  clicked = false;
  home=false;
  about=false;
  candy=false;
  new=false;
  constructor(
    
  ) { 
    $(document).ready(function() {
    $(window).scroll(function(event:any) {
        var pos_body :any = $('html,body').scrollTop();

        if (pos_body > 80) {
            $('.nav').attr('style', 'background-color:hsl(104, 28%, 40%);');
        } else {
            $('.nav').attr('style', 'background-color: var(--body-color);');
        };

    });

});}
  ngOnInit(): void {
  }
  onClick(){
    this.clicked=!this.clicked;
  }
  onClickHome(){
    this.home=true;
    this.about=false;
    this.candy=false;
    this.new=false;
  }
  onClickAbout(){
    this.home=false;
    this.about=true;
    this.candy=false;
    this.new=false;
  }
  onClickCandy(){
    this.home=false;
    this.about=false;
    this.candy=true;
    this.new=false;
  }
  onClickNew(){
    this.home=false;
    this.about=false;
    this.candy=false;
    this.new=true;
  }

}
