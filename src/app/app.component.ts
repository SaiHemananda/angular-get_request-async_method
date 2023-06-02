import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators';

import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { ActorService } from './actors.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  flops: Movie[];
  actors;
 
 flops$;
 actors$;
  constructor(private title: Title,
             public movieService: MovieService,
             public actorService: ActorService) {
               this.title.setTitle('async method');
             }

  ngOnInit() {
   // this is one way of subscribing the observable
   
   this.movieService.getMovies().subscribe((moives: Movie[]) => {
      this.flops = moives;
    });

    this.actorService.getActors().subscribe(
      actorData => {
        this.actors = actorData;
      }
    );

    //Another & easy of subscribing the bservables
   this.flops$ = this.movieService.getMovies();
                // .pipe(
                //   map( movie =>{
                //      movie += ' good';
                //      }));

    this.actors$ = this.actorService.getActors();
  }
}
