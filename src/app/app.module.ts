import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ContentLayoutComponent } from '@app/core/layouts/content-layout/content-layout.component';
import { NavBarComponent } from '@app/core/components/nav-bar/nav-bar.component';

import { AuthorizationGuard } from '@app/core/guards/authorization.guard';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
