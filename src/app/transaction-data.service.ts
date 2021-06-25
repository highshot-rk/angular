import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {

  //get data from Express server

  private REST_API_SERVER = "http://localhost:8000/api";

  constructor(private httpClient: HttpClient) { }

  public getJsonData(page: any){
    return this.httpClient.get(this.REST_API_SERVER + "/jsonPageData/" + page);
  }

  public getChildJsonData(parentId: any){
    return this.httpClient.post(this.REST_API_SERVER + "/jsonChildData", {parentId: parentId});
  }
}
