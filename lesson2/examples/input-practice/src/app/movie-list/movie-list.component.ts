import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let errMsg = '';
      
      if(newTitle === ''){
         errMsg = "ERROR. PLEASE ENTER A TITLE."
      } else if(this.movies.includes(newTitle)){
         errMsg = `${newTitle} is already scheduled for viewing.`
      } else {
         this.movies.push(newTitle)
      }
      return errMsg;
   }
}