import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryListComponent} from "./country-list/country-list.component";
import {AppComponent} from "./app.component";

const routes: Routes = [{path: 'countries', component: CountryListComponent,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
