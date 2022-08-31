import { Component, OnInit } from '@angular/core';
import { ISlide } from '../shared/interfaces/islide';
import { CarouselService } from '../../services/shared/carousel/carousel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public carouselSlides: ISlide[];

  constructor(private carouselService: CarouselService) {
    this.carouselSlides = carouselService.getSlides();
  }

  ngOnInit(): void {}
}
