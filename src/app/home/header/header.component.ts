import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems.push(
      {
        id: 'home',
        label: 'Home',
        routerLink: '/',
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
    this.customMenu()
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
    let about: MenuItem = {
      id: 'about',
      label: 'About',
      styleClass: 'menuitem ml-auto',
      routerLink: 'about'
    }
    this.menuItems.push(about)
  }

  doLogout() {
    alert("logout")
    // this.loginService.doLogout()
  }

  customMenu() {
    let listMenuFromEnv = environment.mfe;
    listMenuFromEnv.forEach((x) => {
      if (x.asMenu) {
        this.menuItems.push({
          id: x.id,
          label: x.label,
          routerLink: x.routerLink,
          styleClass: x.styleClass
        })
      }
    })
  }
}
