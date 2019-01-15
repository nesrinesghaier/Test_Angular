import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Country} from '../model/country';
import {DataService} from '../service/data.service';
import {Observable} from 'rxjs';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Subscription} from 'rxjs';
import {FilterPipe} from '../filter/filter.pipe';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.scss'],

})
export class CountryListComponent implements OnInit {
    public data: any[] = [];
    public countries: Country[] = [];
    public currentItem: Country;
    private favorite = false;
    private show = true;

    constructor(private service: DataService) {

        this.service.getConfigResponse().subscribe(
            (res: Country[]) => {
                res.forEach((value, index) => {
                        if (value.region.includes('Europe')) {
                            this.countries.push(value);
                        }
                });
                console.log(this.countries.length);
            });
    }

    ngOnInit() {
    }


    addToFavorites(item) {
        item.favorite = !item.favorite;
    }

    showCountry(c: Country) {
        this.currentItem = c;
        this.show = false;
    }
}
