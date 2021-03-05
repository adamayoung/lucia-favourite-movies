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
        name: 'Sister Sister',
        imageName: 'sister-sister'
      },
      {
        id: 3,
        name: 'Mako Mermaids',
        imageName: 'mako-mermaids'
      },
      {
        id: 4,
        name: 'Masha and the Bear',
        imageName: 'masha-and-the-bear'
      },
      {
        id: 5,
        name: 'Despicable Me',
        imageName: 'despicable-me'
      }
    ]
  }

}
