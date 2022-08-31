import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public slides: ISlide[];
  constructor() {
    this.slides = [
      {
        id: 0,
        imageUrl: '../../../assets/pexels-jeff-guab-2407634.jpg',
      },
      {
        id: 1,
        imageUrl: '../../../assets/pexels-ricardo-esquivel-1701893.jpg',
      },
      {
        id: 2,
        imageUrl: '../../../assets/pexels-mikhail-nilov-7683376.jpg',
      },
      {
        id: 3,
        imageUrl: '../../../assets/crime_scene.png',
      },
    ];
  }

  ngOnInit(): void {}
}

interface ISlide {
  id: number;
  imageUrl: string;
}
