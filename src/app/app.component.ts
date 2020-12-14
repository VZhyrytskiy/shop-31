import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title: ElementRef<HTMLHeadingElement>;

  constructor(private titleService: Title) {
  }

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Shop';
  }

  onActivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Activated Component', $event, routerOutlet);
    this.titleService.setTitle(routerOutlet.activatedRouteData.title);
  }
}
