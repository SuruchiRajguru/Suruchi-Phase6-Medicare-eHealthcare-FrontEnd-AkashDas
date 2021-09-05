import { EventEmitter, Injectable } from '@angular/core';
import { SearchTextModel } from '../models/search-text-model';

@Injectable({
  providedIn: 'root'
})
export class SearchByTextService {

  searchTextModel : SearchTextModel = new SearchTextModel();
  searchTextUpdate = new EventEmitter<string>();
  constructor() { }
    setsearchTextModel(searchText : string){
      this.searchTextModel.searchText = searchText;
    }

    getsearchText(){
      return this.searchTextModel.searchText;
    }

}
