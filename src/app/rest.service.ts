import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {pipe} from 'rxjs';
import { policyHolder } from './insurancepolicyholders/policyholders';
import { InsurancepolicyholdersComponent } from './insurancepolicyholders/insurancepolicyholders.component';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  
  constructor(private http: HttpClient) { 
  }
  policydata1:policyHolder[]=[];

  postPolicy(data:any)
  {
    return this.http.post<any>("http://localhost:3000/users",data);
    pipe(map((res:any)=>{
      return res;
    }) )
  }

  getPolicy(data:any)
  {
    return this.http.get<any>("http://localhost:3000/users",data);
    pipe(map((res:any)=>{
      return res;
    }) )
  }

  updatePolicy(data:any,id:string)
  {
    return this.http.put<any>("http://localhost:3000/users"+"/"+id,data);
    pipe(map((res:any)=>{
      return res;
    }) )
  }

  deletePolicy(id: number)
  {
    return this.http.delete<any>("http://localhost:3000/users"+"/"+id);
    pipe(map((res:any)=>{
      return res;
    }) )
  }

  
}
