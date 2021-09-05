import { Component } from '@angular/core';
import { UserDetails } from './models/user-details';
import { SearchByTextService } from './services/search-by-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medicare-eHealthcare';

  public searchText : string = 'Hello';
  userDetails : UserDetails = new UserDetails();

  constructor(private searchByTextService : SearchByTextService){
    const jsonData = JSON.stringify(this.userDetails)
    localStorage.setItem('userDetails', jsonData)
  }

  onTextEnter(event : Event){
    this.searchText = (<HTMLInputElement>event.target).value;
  }
  onClickSearch(){
    
    this.searchByTextService.searchTextUpdate.emit(this.searchText);
  }


}
