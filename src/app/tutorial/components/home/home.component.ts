import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import {  } from 'subs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  private draging$ = new Subject<CdkDragMove<any>>();
  private subs=new SubSink();
  public constructor(
    private el: ElementRef
  ) { }

  public ngOnInit(): void {
    // console.log('el:', this.el.nativeElement);

    // const obs = new ResizeObserver((e, p) => {
    //   console.log('e:', e);
    //   console.log('p:', p);
    // }).observe(this.el.nativeElement);
  }

  public startDrag(): void {

  }

  public onDraging(item: CdkDragMove<any>): void {
    console.log('draging:', item);
  }

}
