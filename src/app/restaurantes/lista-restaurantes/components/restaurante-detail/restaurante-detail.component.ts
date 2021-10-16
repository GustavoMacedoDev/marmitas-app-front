import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/shared/interfaces/restaurant.dto';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.component.html',
  styleUrls: ['./restaurante-detail.component.css']
})
export class RestauranteDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.restaurantsService.listaRestauranteById(id)
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
