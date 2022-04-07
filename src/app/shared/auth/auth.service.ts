import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {

    userName = '';

    constructor() { }
    
    login(userName: string, password: string): void {
        // Login for honest users TM
        this.userName = userName;
    }

    logout(): void {
        this.userName = '';
    }
}