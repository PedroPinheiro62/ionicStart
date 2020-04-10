import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable({
  providedIn: 'root'
})
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }
  static get: any;

  constructor() { }

  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    let config ={
      showSlide: false,
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(showSlide){
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }
}
