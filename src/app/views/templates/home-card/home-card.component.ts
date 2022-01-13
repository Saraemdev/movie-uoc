import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent {
  @Input() public movie!: Movie;

  imgUrl: string = 'https://image.tmdb.org/t/p/';
  imgSize: string = 'w220_and_h330_face/';

  constructor() {}
}
