import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../model/country";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input('country') country:Country;
  constructor() { }

  ngOnInit() {
    console.log(this.country.region)
  }

}
