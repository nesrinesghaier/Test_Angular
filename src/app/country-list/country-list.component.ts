import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Country} from '../model/country';
import {DataService} from '../service/data.service';
import {Observable} from 'rxjs';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Subscription} from 'rxjs';
import {FilterPipe} from '../filter/filter.pipe';

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
                this.countries = res,
                    error => console.log(error);
            });
    }


    ngOnInit() {
    }


    addToFavorites(item) {
        console.log(item);
        item.favorite = !item.favorite;
    }

    showCountry(c: Country) {
        this.currentItem = c;
        this.show = false;
    }
}
