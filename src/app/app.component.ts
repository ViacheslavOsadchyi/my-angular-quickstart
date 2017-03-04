import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  'styleUrls': [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit{
	title 			= "Tour of Heroes";
	ngOnInit(): void {
	}
}