import { Component } from '@angular/core';
import {  getCurrencySymbol  }from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { characters } from './character-data-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  public characters:any = characters
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
  }

  
  

}
