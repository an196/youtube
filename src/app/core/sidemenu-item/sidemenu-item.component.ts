import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const HOME_ICON =
  `<svg   viewBox="0 0 24 24"><g><path d="M4,10V21h6V15h4v6h6V10L12,3Z" ></path></g></svg>`

const SHORT_ICON =
  `<svg viewBox="0 0 24 24"><g><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" ></path></g></svg>`

const CHANEL_ICON =
  `<svg viewBox="0 0 24 24" ><g ><path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path></g></svg>`

@Component({
  selector: 'app-sidemenu-item',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.scss'],
})
export class SidemenuItemComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('home', sanitizer.bypassSecurityTrustHtml(HOME_ICON));
    iconRegistry.addSvgIconLiteral('short', sanitizer.bypassSecurityTrustHtml(SHORT_ICON));
    iconRegistry.addSvgIconLiteral('chanel', sanitizer.bypassSecurityTrustHtml(CHANEL_ICON));
  }

}
