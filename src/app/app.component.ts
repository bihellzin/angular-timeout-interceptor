import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get('https://reqres.in/api/users?page=1') // A domain that is working properly (or at least should be)
      .subscribe(console.log);
    setTimeout(() => console.log('14.9s setTimeout'), 14900);
    this.httpClient
      .get<unknown>('https://example.com:81') // A domain I know it's going to timeout
      .subscribe(console.log);
    setTimeout(() => console.log('15.3s setTimeout'), 15300);
  }
}
