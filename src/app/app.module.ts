import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'angular2-markdown';

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
    ChangelogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MarkdownModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    BrowserAnimationsModule
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
