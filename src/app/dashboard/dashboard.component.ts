import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthComponent } from '../shared/component/auth/auth.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(
    private msgService: MessageService,
    private ddService: DialogService,
  ) { }

  ref: DynamicDialogRef | undefined

  haveAccess: boolean = false;
  ngOnInit(): void {
    let auth = localStorage.getItem('auth')
    if (auth) this.haveAccess = true;
  }

  getAccess() {
    this.haveAccess = true; //bypass
    localStorage.setItem('auth', "abc") //bypass
    this.ref = this.ddService.open(AuthComponent, {
      header: "Get Access",
      closable: true
    })
    this.ref.onClose.subscribe((res: any) => {
      if (res) {
        this.msgService.add({ key: 'top-right', severity: 'info', detail: 'Now you have access to any menu' })
        this.haveAccess = true;
      }
    })
  }

  removeAccess() {
    this.msgService.add({ key: 'top-right', severity: 'info', detail: 'Access has been removed' })
    localStorage.removeItem('auth');
    this.haveAccess = false;
  }

}
