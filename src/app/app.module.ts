import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FuelUiModule } from 'fuel-ui';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesService } from './features/features.service';
import { DownloadComponent } from './download/download.component';
import { DownloadService } from './download/download.service';
import { AboutComponent } from './about/about.component';
import { TeamMembersService } from './about/team-member/team-members.service';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamMemberComponent } from './about/team-member/team-member.component';
import { BrowserDetectionService } from './utilities/browser-detection.service';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DownloadComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TeamMemberComponent,
    ChangelogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FuelUiModule,
    MarkdownModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [
    FeaturesService,
    TeamMembersService,
    DownloadService,
    BrowserDetectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
