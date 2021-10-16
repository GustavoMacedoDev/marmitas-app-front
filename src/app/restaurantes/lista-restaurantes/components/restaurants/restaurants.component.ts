import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../../shared/interfaces/restaurant.dto';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.listarRestaurantes()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
