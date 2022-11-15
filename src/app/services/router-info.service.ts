import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterInfoService {
  private url: string = '';
  constructor() { }

  setUrl(url: string): void {
    this.url = url
  }
  getUrl(): string {
    return this.url;
  }
}
