import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Chosen Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.pinclipart.com/picdir/middle/4-49532_graphic-freeuse-download-film-projector-clipart-old-video.png';
  image3 = 'https://static6.depositphotos.com/1000888/572/v/950/depositphotos_5723150-stock-illustration-magnifying-glass.jpg';

  constructor() { }

  ngOnInit() {
  }

}