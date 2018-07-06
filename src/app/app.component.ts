import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2018 July - Dec'; 
  index = 0;
  agenda: any[] = [];
  
  // Current Restaurant
  date = new Date();
  name = '';
  address = '';
  directions = '';
  phone = '';
  notice = '';
  ed_note = '';
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() { 
      this.http.get('assets/agenda2018b.json').subscribe(data => {
        console.log(data);
        this.agenda = <any[]>data;
        
        var i : number = 0;
        var today = new Date().toISOString().slice(0, 10);
        console.log(today);
      
        for (; i<this.agenda.length; i++) {
          if (today <= this.agenda[i].date) {
            this.index = i;
            break;
          }
        }
      
        this.update(this.index);
      });
        
  }
  
  onPrevious() {
      this.onNavigate(false);
  }
  
  onNext() {
      this.onNavigate(true);
  }
  
  onNavigate(nextPrevious: boolean) {
      console.log('navigate ' + nextPrevious);
      this.index = this.index + (nextPrevious ? 1 : -1);
      if (this.index < 0) {
        this.index = 0;
      }
      else if (this.index >= this.agenda.length) {
        this.index = this.agenda.length - 1;
      }
      this.update(this.index);
  }
  
  update(index: number) {
      console.log(index);
      this.name = this.agenda[this.index].name;
      this.address = this.agenda[this.index].address;
      this.date = this.agenda[this.index].date;
      this.directions = this.agenda[this.index].directions;
      this.phone = this.agenda[this.index].phone;
      this.notice = this.agenda[this.index].notice;
      this.ed_note = this.agenda[this.index].ed_note;
  }
}
