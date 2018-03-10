import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Hello World App';

  todayDate;

  constructor(private myservice: MyserviceService, private http: HttpModule)
  {

  }

   httpdata;
   ngOnInit() {
   }

}
