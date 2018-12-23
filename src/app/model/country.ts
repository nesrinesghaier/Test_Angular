import {Currency} from "./currency";
import {Language} from "./language";
import {RegionalBloc} from "./regionalBloc";
import {StringMap} from "@angular/compiler/src/compiler_facade_interface";

export class Country {

  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Map<any,any>;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
  favorite:boolean;


  constructor() {
    this.translations = new Map<string, string>();
  }


  getTranslations() {
    return this.translations;
  }
};
