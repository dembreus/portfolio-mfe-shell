import { Component, OnInit, Input, Inject } from '@angular/core';
import { ISlide } from '../interfaces/islide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() slides: ISlide[] = [];
  constructor() {}

  ngOnInit(): void {}
}
