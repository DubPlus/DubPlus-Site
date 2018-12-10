import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserDetectionService } from '../utilities/browser-detection.service';

declare var chrome: any;
declare var InstallTrigger: any;

@Injectable()
export class DownloadService {

  constructor(private _browserService: BrowserDetectionService, private _router: Router) { }

  get isInstalled(): boolean {
    return this._browserService.isChrome() && this.chromeIsInstalled;
  }

  get chromeIsInstalled(): boolean {
      return this._browserService.isChrome() && chrome.app.isInstalled;
  }

  install(): void {
    if (this._browserService.isChrome()) {
      this.installChrome();
    } else if (this._browserService.isFirefox()) {
      this.installFirefox();
    }

    this._router.navigate(['/download']);
  }

  installChrome(): void {
      if (this._browserService.isChrome() && !this.chromeIsInstalled && chrome) {
        chrome.webstore.install(
          "https://chrome.google.com/webstore/detail/ebpdoingcodjhfhmecjjfnhohhmcfnlc",
          () => { chrome.app.isInstalled = true; });
      } else {
          window.open('https://chrome.google.com/webstore/detail/dubplus/ebpdoingcodjhfhmecjjfnhohhmcfnlc', '_blank');
      }
  }

  installFirefox(): void {
      if (this._browserService.isFirefox() && InstallTrigger && InstallTrigger.install) {
          let platformType = 0;

          if (this._browserService.isWindows()) {
              platformType = 5;
          } else if (this._browserService.isLinux()) {
              platformType = 2;
          } else if (this._browserService.isOsx()) {
              platformType = 3;
          } else {
              window.open('https://addons.mozilla.org/en-US/firefox/addon/dubplus/', '_blank');
              return;
          }

          InstallTrigger.install({
            'DubPlus': `https://addons.mozilla.org/firefox/downloads/latest/dubplus/platform:${platformType}/addon-796093-latest.xpi?src=userprofile`
          });
      } else {
          window.open('https://addons.mozilla.org/en-US/firefox/addon/dubplus/', '_blank');
      }
  }

  installUserscript(): void {
      window.location.href = 'https://gist.github.com/coryshaw1/c1c2e7aa00a0039d1057b8e2cda85e7b/raw/8b4a669a507651d8afb314c1900c4df1ff6b364f/dubplus.user.js';
  }
}
