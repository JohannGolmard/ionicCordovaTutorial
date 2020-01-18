import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private movies: any[] = [];
  constructor(private service: MoviesServiceService) {}
  ngOnInit(){
    this.service.getMovies().subscribe((res) => {
      for(let r of res){
        this.movies.push(r);
      }
      console.log(this.movies);
    });
  }
}
