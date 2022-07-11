import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

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

}
