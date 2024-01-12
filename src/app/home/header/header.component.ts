import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems.push({
      id: 'home',
      label: 'Home',
      routerLink: '/',
      icon: PrimeIcons.HOME,
      styleClass: 'menuitem'
    },
    // {
    //   id: 'angular',
    //   label: 'MicroFrontend Angular',
    //   routerLink: 'mf-angular',
    //   // icon: PrimeIcons.HOME,
    //   styleClass: 'menuitem'
    // }
    )
    // let auth = JSON.parse(localStorage.getItem('auth') || '')
    // // if (auth.menu) {
    // //   this.menuItems.push(...auth.menu);
    // // }
    // auth.name = "idrus"
    // let menuProfile: MenuItem = {
    //   id: 'profile',
    //   label: auth.name,
    //   icon: PrimeIcons.USER,
    //   styleClass: 'menuitem ml-auto',
    //   items: [{
    //     label: 'Logout',
    //     icon: PrimeIcons.SIGN_OUT,
    //     command: () => {
    //       this.doLogout()
    //     },
    //   }]
    // }
    // this.menuItems.push(menuProfile)
  }

  doLogout() {
    alert("logout")
    // this.loginService.doLogout()
  }
}
