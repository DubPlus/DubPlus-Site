import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TeamMember } from './team-member';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  @Input()
  member: TeamMember;

  githubIframeSrc: SafeResourceUrl;
  githubProfileSrc: SafeResourceUrl;
  githubAvatarSrc: SafeResourceUrl;
  twitterIframeSrc: SafeResourceUrl;
  queupProfileSrc: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.githubIframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(`https://ghbtns.com/github-btn.html?user=${this.member.Github}&type=follow`);
    this.githubProfileSrc = this._sanitizer.bypassSecurityTrustResourceUrl(`https://github.com/${this.member.Github}`);
    this.githubAvatarSrc = this._sanitizer.bypassSecurityTrustResourceUrl(`https://avatars2.githubusercontent.com/u/${this.member.GithubId}`);
    this.twitterIframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(`https://platform.twitter.com/widgets/follow_button.a0ec3119d8db2bc5422f2144c89ad7a9.en.html#dnt=false&id=twitter-widget-2&lang=en&screen_name=${this.member.Twitter}&show_count=false&show_screen_name=true&size=m&time=${(new Date().getTime())}`);
    this.queupProfileSrc = this._sanitizer.bypassSecurityTrustResourceUrl(`https://queup.net/user/${this.member.QueUp}`);
  }

}
