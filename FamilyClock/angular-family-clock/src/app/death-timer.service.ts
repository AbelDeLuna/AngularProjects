import { Injectable } from '@angular/core'

@Injectable({
  
})

export class Timer{
  dod: number;
  timeRemaining: number;
  timerDisplay: string;
  interval;

  constructor(){
  }

  public startTimer(): void{
    let timeNow: number = new Date().getTime();
    this.timeRemaining = this.dod - timeNow;
    this.interval = setInterval( function(){
      this.timeRemaining -= 1;
    } , 1000)
  };

  public endTimer(): void{
    clearInterval(this.interval);
  };
  

}
