import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  showMenu: boolean = false;
  
  constructor(){}

  ngOnInit(): void {
    
  }

  showMenuSwitch(){
    if(this.showMenu){
      this.showMenu = false;
    }else{
      this.showMenu = true;
    }
  }

}
