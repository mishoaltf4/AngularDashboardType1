import {Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: string = 'light';

  constructor(){
    const storedTheme = localStorage.getItem("preferred-theme");
    this.currentTheme = storedTheme ? storedTheme : 'light';
    this.setTheme(this.currentTheme);
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('preferred-theme', theme);
  }

  toggleTheme() {
    const newTheme: 'light' | 'dark' = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  getCurrentTheme():string{
    return this.currentTheme;
  }
}
