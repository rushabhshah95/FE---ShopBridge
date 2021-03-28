/* This is a common service to interact with backend API */

/* Import statements */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Declaring Base URL of Backend
const baseURL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  /* To get all product data
  REQUEST TYPE : GET
  PARAMETERS TO PASS : NA
  */
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  /* To get all product data
  REQUEST TYPE : POST
  PARAMETERS TO PASS : Product data
  */ 
  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  /* To get all product data
  REQUEST TYPE : PUT
  PARAMETERS TO PASS : Product Id and new/updated data
  */
  update(id, data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  /* To get all product data
  REQUEST TYPE : DELETE
  PARAMETERS TO PASS : Product Id
  */
  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
}