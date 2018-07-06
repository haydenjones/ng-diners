import { Component } from '@angular/core';

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
  
  ngOnInit() { 
      console.log('ngOnItit says Hi');
      
      this.agenda = [
  {  
      "date":"2018-07-06",
      "name":"Okkaido Sushi",
      "address":"245 Eglinton Ave. East",
      "directions":"at Mt. Pleasant Rd.: take 34, 51, 54, or 56 bus E from Eglinton Station",
      "phone":"416-483-6848",
      "notice":"NOTICE !!!",
      "ed_note":""
   },
   {  
      "date":"2018-07-13",
      "name":"Okonomi House Restaurant",
      "address":"23 Charles St. West",
      "directions":"just W of Yonge, 1 stoplight S of Bloor: walk S from Bloor/Yonge Station",
      "phone":"416-925-6176",
      "notice":"",
      "ed_note":"note by editor"
   }      ];
      
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
