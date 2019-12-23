import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private logs:string[] = [];

  constructor() { }
  logInfo(msg:string){

    this.log(msg);
  }
  logDebug(msg:string){

    this.log(msg);
  }
  logError(msg:string){

    this.log(msg);
  }
  private log(msg:string){
    this.logs.push(msg);
    console.log(msg);
  }
}
