import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

    constructor() {
    }

    getLastPath(): string {
        const lastPosEndPoint = window.location.href.split('/').length - 1;
        const endPoints = window.location.href.split('/');
        let lastPath = endPoints[lastPosEndPoint];
    
        if (lastPath.length === 0) {
            lastPath = "home";
    
        }
    
        return lastPath; 
    }
}
