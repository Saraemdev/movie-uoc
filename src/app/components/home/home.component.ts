import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { TMDBmovieService } from 'src/app/services/tmdbmovie.service';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabList: string[] = ['En cines', 'Próximamente', 'Mejor valoradas'];
  selectedTab: number = 0;

  movieList: Movie[] = [];

  isLoading: boolean = true;

  constructor(private tmdbMovieService: TMDBmovieService) {}

  ngOnInit(): void {
    this.getMovieList('now_playing', 1);
  }

  getMovieList(request: string, page: number): void {
    this.isLoading = true;
    this.movieList = [];
    this.tmdbMovieService.getMovies(request, page).subscribe((movies) => {
      this.movieList = movies.results;
      this.isLoading = false;
    });
  }

  tabSwitch(event: any): void {
    this.selectedTab = event.index;
    switch (event.index) {
      case 0:
        this.getMovieList('now_playing', 1);
        break;
      case 1:
        this.getMovieList('upcoming', 1);
        break;
      case 2:
        this.getMovieList('top_rated', 1);
        break;
    }
  }

  //swiper
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 60,
      },
    },
  };

  /*
  swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
    },
  });
*/
  onSwiper(swiper: any) {
    //console.log(swiper);
  }

  onSlideChange() {
    //console.log('slide change');
  }
}
