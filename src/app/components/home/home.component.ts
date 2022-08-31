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
        imageUrl:
          'https://images.pexels.com/photos/2407634/pexels-photo-2407634.jpeg?cs=srgb&dl=pexels-jeff-guab-2407634.jpg&fm=jpg',
      },
      {
        id: 1,
        imageUrl:
          'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-1701893.jpg&fm=jpg',
      },
      {
        id: 2,
        imageUrl:
          'https://images.pexels.com/photos/7683376/pexels-photo-7683376.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7683376.jpg&fm=jpg',
      },
    ];
  }

  ngOnInit(): void {}
}

interface ISlide {
  id: number;
  imageUrl: string;
}
