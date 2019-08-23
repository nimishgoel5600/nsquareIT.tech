import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ServiceComponent } from './service/service.component';
import { CounterComponent } from './counter/counter.component';
import { FromBlogComponent } from './from-blog/from-blog.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JobSupportComponent } from './job-support/job-support.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AboutComponent,
    CallToActionComponent,
    ServiceComponent,
    CounterComponent,
    FromBlogComponent,
    ClientComponent,
    ContactComponent,
    GoogleMapComponent,
    FooterComponent,
    HomeComponent,
    JobSupportComponent,
    ModalPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
