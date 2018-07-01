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
  name = '107';
  address = '27th Street';
  
  ngOnInit() { 
      console.log('ngOnItit says Hi');
      
      this.agenda = [
             {
                 name: "Alpha",
                 date: "2018-07-01";
                 address: "4968 Yonge St"
             },
             {
                 name: "Beta",
                 date: "2018-07-02";
                 address: "119 Doris Ave"
             }
      ];
      
      this.index = 0;
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
      this.name = this.agenda[this.index].name;
      this.address = this.agenda[this.index].address;
  }
  
  update(index: number) {
      console.log(index);
  }
}
