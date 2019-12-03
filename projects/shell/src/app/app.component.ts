import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ViewChild('microfrontend', { static: true })
  // private microfrontend;

  counter = 1;

  add() {
    this.counter++;
  }

  ngOnInit() {
    // Dynamically adding script tag. This is necessary to 
    // assure it's loaded after the polyfills
    // One could assure this by registering it with the scripts
    // section in angular.json too.
    const script = document.createElement('script');
    script.src = 'assets/main.js';
    document.body.appendChild(script);

    // Element dynamisch einfügen
    // const microfrontend = document.createElement('micro-frontend');
    // this.microfrontend.nativeElement.appendChild(microfrontend);
  }
}
