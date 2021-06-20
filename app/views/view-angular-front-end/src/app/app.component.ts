import { Component, OnDestroy } from '@angular/core';
import { Test1Service } from 'src/providers/test1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'view-angular-front-end';
  users: any[] = [];
  constructor(private serv: Test1Service) {
    this.getTest();
  }

  ngOnDestroy() {}

  getTest() {
    this.serv.get().pipe();
  }
}
