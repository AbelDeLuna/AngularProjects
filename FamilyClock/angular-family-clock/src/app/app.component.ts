import { Component, OnInit } from '@angular/core';
import { Family, Person } from './people';

const MAX_YEARS_MALE = 68;
const MAX_YEARS_FEMALE = 72;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  family = Family;
  selectedPerson: object;
  combinedYears: number = 0;
  longestToLive: string;
  longestYears: number = 0;

  ngOnInit() {
    for(let i = 0; i < this.family.length; i++){
      let remainingYears = this.personsYearsLeft(this.family[i]);
      if (remainingYears > this.longestYears){
        this.longestToLive = this.family[i].name;
        this.longestYears = remainingYears
      }
      this.combinedYears += remainingYears;
    }
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
  unSelect(): void{
    this.selectedPerson = undefined;
  }

  CalculateAge(member: Person): number{
    let yearDifference = Date.now() - new Date(member.dob).getTime();
    let differenceDate = new Date(yearDifference);
    return Math.abs(differenceDate.getFullYear() - 1970);
  };

  personsYearsLeft(member: Person):number {
    if(member.sex === 'female'){
      return MAX_YEARS_FEMALE - this.CalculateAge(member);
    } else {
      return MAX_YEARS_MALE - this.CalculateAge(member);
    };
  };
}