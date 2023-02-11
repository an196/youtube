import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        LazyLoadModule,
        CoreModule,
        BrowserAnimationsModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgControlsModule,
        HttpClientModule,
        OAuthModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
