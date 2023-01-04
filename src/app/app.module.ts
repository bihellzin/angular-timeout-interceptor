import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  DEFAULT_TIMEOUT,
  RequestTimeoutHttpInterceptor,
} from './timeout.interceptor';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTimeoutHttpInterceptor,
      multi: true,
    },
    { provide: DEFAULT_TIMEOUT, useValue: 15000 },
  ],
})
export class AppModule {}
