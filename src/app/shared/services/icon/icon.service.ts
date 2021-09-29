import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { Icons } from 'src/app/shared/enums/icons.enums';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
   }

  /**
   * Register icons on component for using @shared/enums/icons.enums and path '../assets/icons'
   *
   * Register icons on @shared/enums/icons.enums for use
   * @memberof IconService
   */
  public registerIcons(): void {
    this.loadIcons(Object.values(Icons), 'src/assets/icons');
  }

  /**
   * Loads icons on MaterialIconRegistry
   *
   * @private
   * @param {string[]} iconKeys
   * @param {string} iconUrl
   * @memberof IconService
   */
  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach(key => {
      console.log('iconKeys', iconKeys)
      console.log('iconUrl', iconUrl)

      this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
    });
  }

}
