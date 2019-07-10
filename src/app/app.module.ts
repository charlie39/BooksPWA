import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule,MatMenuModule, MatIconModule, MatCardModule, MatButtonModule, MatTableModule, MatDividerModule, MatProgressSpinnerModule } from'@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { OktaAuthModule } from '@okta/okta-angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RequestCache } from './cache/request-cache.service';
import { CachingInterceptor } from './cache/caching-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatProgressSpinnerModule,
    OktaAuthModule.initAuth({
    issuer:'https://{yourOcktaDomain/oauth2/default',
	redirectUri:'http://localhost:8080/implicit/callback',
	clientId: '{yourClientId'
	}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
