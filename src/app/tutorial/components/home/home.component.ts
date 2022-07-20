import { CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  private draging$ = new Subject<CdkDragMove<any>>();
  private subs = new SubSink();
  public constructor(
    private el: ElementRef
  ) { }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public ngOnInit(): void {
    // console.log('el:', this.el.nativeElement);

    // const obs = new ResizeObserver((e, p) => {
    //   console.log('e:', e);
    //   console.log('p:', p);
    // }).observe(this.el.nativeElement);
    this.subs.sink = this.draging$
      // .pipe(debounceTime(80))
      .pipe(distinctUntilChanged((pre, cur) => _.isEqual(pre.event.target, cur.event.target)))
      .subscribe(it => {
        console.log('item:', it);
        // const evt: HTMLElement = it.event.target as any;
        const ps = (it.event as MouseEvent).composedPath();
        let containerDom: HTMLElement | null = null;
        for (let i = 0; i < ps.length - 1; i++) {
          const e: HTMLElement = ps[i] as any;
          if (typeof e.getAttribute === 'function' && e.getAttribute('drop-container')) {
            containerDom = e;
            break;
          }
        }
        // console.log('path:', Array.isArray(ps));
        console.log('containerDom:', containerDom);
        // evt.getAttribute('isDropContainer');
        // it.event.target.p
        // console.log('item:', (it.event.target as any)['isDropContainer']);
        // console.log('item:', (it.event.target as any).getAttribute('drop-container'));
      });
  }

  public startDrag(): void {

  }

  public onDraging(item: CdkDragMove<any>): void {
    // console.log('draging:', item);
    this.draging$.next(item);
  }

}
