import { Component, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  count = 0;

  constructor (private _changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit (): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    clearInterval();
  }

  detach () {
    this._changeDetectorRef.detach();
  }

  reattach () {
    this._changeDetectorRef.reattach();
  }

  detectChanges () {
    this._changeDetectorRef.detectChanges();
  }

  start () {
    setInterval(() => {
      this.count++;
      console.log('count', this.count);
      this.markForCheck();
    }, 1000);
  }

  markForCheck () {
    this._changeDetectorRef.markForCheck();
  }

  ngDoCheck (): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('change detect running');
  }

  ngAfterViewChecked (): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked'
    console.log('change detect running ngAfterViewChecked');
  }

  ngAfterContentChecked (): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('change detect running ngAfterContentChecked');

  }
}
