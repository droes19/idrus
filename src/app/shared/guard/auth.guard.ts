import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuardService).canActive();
};

@Injectable()
export class AuthGuardService {
  constructor(
    private msgService: MessageService,
  ) { }

  async canActive() {
    let auth = localStorage.getItem('auth')
    if (auth) {
      return true
    } else {
      this.msgService.add({ key: 'top-right', severity: 'warn', summary: 'Access denied', detail: 'You don\'t have access' })
      return false
    };
  }
}