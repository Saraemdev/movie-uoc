import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/cast.interface';

@Component({
  selector: 'app-movie-cast-card',
  templateUrl: './movie-cast-card.component.html',
  styleUrls: ['./movie-cast-card.component.scss'],
})
export class MovieCastCardComponent {
  @Input() public actor!: Cast;

  imgUrl: string = 'https://image.tmdb.org/t/p/';
  imgSize: string = 'w240_and_h266_face/';

  constructor() {}
}
