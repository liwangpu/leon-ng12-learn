import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  apps: any[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let idx = 20; idx >= 0; idx--) {
      this.apps.push({
        id: faker.datatype.uuid(),
        title: `这是一个名字很长很长的应用测试专用看看会怎么截取`
      });
    }
  }

}
