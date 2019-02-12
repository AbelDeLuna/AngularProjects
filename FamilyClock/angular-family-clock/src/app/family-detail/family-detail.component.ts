import { Component, Input } from '@angular/core';
import { Person } from '../people';
import { Timer } from '../death-timer.service'

const MAX_YEARS_MALE = 68;
const MAX_YEARS_FEMALE = 72;

@Component({
  selector: 'family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: [ './family-detail.component.css' ],
  providers: [ Timer ],
})

export class FamilyDetailComponent {
  @Input() people:Person

  constructor(private timer: Timer){   
  } 

  public CalculateDateOfDeath(member: Person): Date {
    let dob = new Date(member.dob);
    if (member.sex === "female"){
      return new Date(dob.setFullYear(dob.getFullYear() + 1 + MAX_YEARS_FEMALE));
    } else {
      return new Date(dob.setFullYear(dob.getFullYear() + 1 + MAX_YEARS_MALE));
    }
  }

  public TimeRemaining(member: Person): string{
    let timeNow = new Date().getTime();
    let dod = this.CalculateDateOfDeath(member).getTime();
    let timeDifference = dod - timeNow;

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  };

  public DateToString(dod: Date): string{
    return dod.getMonth() + "/" + dod.getDay() + "/" + dod.getFullYear();
  }

  //timer(member: Person){
  //  let timeNow = new Date();
  //  setInterval(this.TimeRemaining(member), 1000)
  //}
}