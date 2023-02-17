import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { IconService } from 'app/shared/services/icon.service';

import { icons } from './icons-elements';

@Component({
    selector: 'app-side-login',
    templateUrl: './side-login.component.html',
    styleUrls: ['./side-login.component.scss']
})

export class SideLoginComponent implements OnInit {


    constructor(private iconService: IconService) {
        iconService.registerIcons(icons);
    }

    ngOnInit() {
       
    }
    onSignIn(googleUser: any): void {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    signOut(): void {
        
    }

}
