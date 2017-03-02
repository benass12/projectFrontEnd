import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AdminTService {

  constructor(private http: Http) { }


  getLoan(url): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
  }



}
