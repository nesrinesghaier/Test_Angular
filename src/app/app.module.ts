import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryDetailsComponent} from './country-details/country-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FilterPipe} from './filter/filter.pipe';
import {OverlayContainer} from '@angular/cdk/overlay';


import {
    CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
    CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
    CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule
} from '@covalent/core';

@NgModule({
    declarations: [
        AppComponent,
        CountryListComponent,
        CountryDetailsComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        MatIconModule,
        ScrollingModule,
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentMediaModule,
        CovalentExpansionPanelModule,
        CovalentStepsModule,
        CovalentLoadingModule,
        CovalentDialogsModule,
        CovalentSearchModule,
        CovalentPagingModule,
        CovalentNotificationsModule,
        CovalentMenuModule,
        CovalentDataTableModule,
        CovalentMessageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, overlayContainer: OverlayContainer) {
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
        overlayContainer.getContainerElement().classList.add('alternate-theme');
    }
}
