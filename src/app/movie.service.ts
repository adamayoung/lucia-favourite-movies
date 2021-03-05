import { Injectable } from '@angular/core';

import { Movie } from './models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  fetchMovies(): Movie[] {
    return [
      {
        id: 1,
        name: 'Son of Big Foot',
        imageName: 'son-of-bigfoot'
      },
      {
        id: 2,
        name: 'Son of Big Foot',
        imageName: 'son-of-bigfoot'
      },
      {
        id: 3,
        name: 'Son of Big Foot',
        imageName: 'son-of-bigfoot'
      },
      {
        id: 4,
        name: 'Son of Big Foot',
        imageName: 'son-of-bigfoot'
      },
      {
        id: 5,
        name: 'Son of Big Foot',
        imageName: 'son-of-bigfoot'
      }
    ]
  }

}
