import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: any;
  desc: any;

  constructor() {
   }

  ngOnInit() {
    this.showSlides(1);
    this.showCar(1);
  }

  myFunction(imgs) {
    // Get the expanded image
    console.log("imgssssssssss..",imgs);

    if(imgs=="offer"){
      this.title = "OUR OFFER";
      this.desc = "OFFER a professional renovation and installation services with a real focus on customer satisfaction. Our installations are carried out by fully trained staff to the highest professional standards.";
    }
    if(imgs=="guarantee"){
      this.title = "OUR GUARANTEE";
      this.desc = "GUARANTEE a professional renovation and installation services with a real focus on customer satisfaction. Our installations are carried out by fully trained staff to the highest professional standards.";
    }
    if(imgs=="provide"){
      this.title = "OUR PROVIDE";
      this.desc = "PROVIDE a professional renovation and installation services with a real focus on customer satisfaction. Our installations are carried out by fully trained staff to the highest professional standards.";
    }
    // console.log("title", this.title);
    // console.log("document",document.getElementsByClassName("imgtext")[0].innerHTML);
    
    document.getElementsByClassName("imgtext")[0].innerHTML = this.title;
    document.getElementById("desctext").innerHTML = this.desc;
  }

slideIndex: any = 1;

// Next/previous controls
plusSlides(n) {
  console.log("dasds",n);
  this.showSlides(this.slideIndex += n);
}

showSlides(n) {
  var i;

  // SLIDESHOW
  var slides = document.getElementsByClassName("mySlides");
  console.log("slides...",slides);
  
  if (n > slides.length) {this.slideIndex = 1}
  // if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    // console.log(slides[i].style);  
      slides[i].style.display = "none";
  }
  slides[this.slideIndex-1].style.display = "block";
}

carIndex: any = 1;

// Next/previous controls
plusCar(n) {
  console.log("dasds",n);
  this.showCar(this.carIndex += n);
}

// Thumbnail image controls
currentCar(n) {
  this.showCar(this.carIndex = n);
}

showCar(n) {
  var i;

  // SLIDESHOW
  var car = document.getElementsByClassName("carouse");
  console.log("car...",car);
  
  if (n > car.length) {this.carIndex = 1}
  // if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < car.length; i++) {
    // console.log(slides[i].style);  
      car[i].style.display = "none";
  }
  car[this.carIndex-1].style.display = "block";

  // DOTS
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  dots[this.carIndex-1].className += " active";
}

}

