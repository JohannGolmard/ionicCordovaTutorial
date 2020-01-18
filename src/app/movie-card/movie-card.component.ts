import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  private movie: any;
  constructor(private route: ActivatedRoute, private service: MoviesServiceService, private location: Location) { }

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.service.getMovies().subscribe((res) => {
        for(let r of res){
          if(r.id == id)
            this.movie = r;
        }
      });
  }

}
