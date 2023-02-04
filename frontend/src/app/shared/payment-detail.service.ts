import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail = new PaymentDetail(-1, '' , '' , '', '');
  readonly rootUrl = "https://localhost:44398/api";
  list : PaymentDetail[] = [];

  constructor(private http: HttpClient) { }

  /* 
  
  Posts Data from frontend to backend.
  
  */

  postPaymentDetail(form: PaymentDetail){
    //console.log(this.formData);
    //return this.http.post(this.rootUrl + `/PaymentDetail/` , this.formData);
    return this.http.post(this.rootUrl + `/PaymentDetail/` , form);
  }
  

  putPaymentDetail(){
    //console.log(form);
    return this.http.put(this.rootUrl + '/PaymentDetail/' + this.formData.PMId, this.formData);
  }

  /* 
  
  get data from backend.
  
  */
  refreshList(){
    this.http.get(this.rootUrl + '/PaymentDetail').toPromise().then(
      res => this.list = res as PaymentDetail[]
    )
  }

}


