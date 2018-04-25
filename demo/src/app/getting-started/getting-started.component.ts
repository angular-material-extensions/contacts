import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  ngVersion = `    _                      _                 ____ _     ___
                 / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
                / △ \\ | '_ \\ / _\` | | | | |/ _\` | '__|   | |   | |    | |
               / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |
              /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|
                             |___/

              Angular CLI: 1.7.3
              Node: 8.11.1
              OS: darwin x64
              Angular:`;

  importBrowserAnimationsModule = `import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [BrowserAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importNoopAnimationsModule = `import {NoopAnimationsModule} from '@angular/platform-browser/animations';

                                    @NgModule({
                                      ...
                                      imports: [NoopAnimationsModule],
                                      ...
                                    })
                                    export class YourAppModule { }`;

  importMaterialThemeSCSS = `@import "~@angular/material/prebuilt-themes/indigo-pink.css";`;

  customMaterialTheme =
    `@import '../node_modules/@angular/material/theming';
     // Plus imports for other components in your app
     // Include the common styles for Angular Material. We include this here so that you only
     // have to load a single css file for Angular Material in your app.
     // Be sure that you only ever include this mixin once!
     @include mat-core()
     // Define the palettes for your theme using the Material Design palettes available in palette.scss
     // (imported above). For each palette, you can optionally specify a default, lighter, and darker
     // hue.
     $candy-app-primary: mat-palette($mat-indigo);
     $candy-app-accent:  mat-palette($mat-pink, A200, A100, A400)
     // The warn palette is optional (defaults to red).
     $candy-app-warn:    mat-palette($mat-red)
     // Create the theme object (a Sass map containing all of the palettes).
     $candy-app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn)
     // Include theme styles for core and each component used in your app.
     // Alternatively, you can import and @include the theme mixins for each component
     // that you are using.
     @include angular-material-theme($candy-app-theme);
     `;

  stylesBeforeImportMDI = `"styles": [
        "styles.css"
      ],`;

  stylesAfterImportMDI = `"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],`;

  materialIconsLink = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`;

  // 6

  systemJSModuleImport = `map: {
  'ngx-material-password-strength': 'node_modules/ngx-material-password-strength/bundles/ngx-material-password-strength.umd.js',
  }`;

  importNgxMaterialContactsModule = `import { NgxMaterialContactsModule } from 'ngx-material-password-strength';`;

  importNgxMaterialContactsModuleInAppModule = `import { NgxMaterialContactsModule } from 'ngx-material-password-strength';
                                              import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

                                              @NgModule({
                                                declarations: [AppComponent, ...],
                                                imports: [NgxMaterialContactsModule.forRoot(),
                                                BrowserAnimationsModule,
                                                 ...],
                                                bootstrap: [AppComponent]
                                              })
                                              export class AppModule {
                                              }`;

  importNgxMaterialContactsModuleInOtherModule = `import { NgxMaterialContactsModule } from 'ngx-material-password-strength';

                                                @NgModule({
                                                  declarations: [OtherComponent, ...],
                                                  imports: [NgxMaterialContactsModule, ...],
                                                })
                                                export class OtherModule {
                                                }`;


  componentExample = `<ngx-material-contacts [contacts]="contacts"
                           [readonly]="false"
                           (onContactAdded)="addContact($event)"
                           (onContactRemoved)="removeContact($event)">
    </ngx-material-contacts>`;

  componentExampleTS = `
              const CONTACT_DATA: Contact[] = [
              {
                id: 'RnCSW7Y88iTx',
                name: 'Anthony Nahas',
                email: 'anthony.na@your_domain.com',
                photoURL: '../../../assets/profiles/17p60.png',
                phoneNumber: '+1-202-555-0169'
              },
              {
                id: 'KXgJviXd4EL9',
                name: 'Amanda Lee',
                email: 'amanda.lee@ngx-material-contacts.de',
                photoURL: '../../../assets/profiles/1p60.png',
                phoneNumber: '+1-502-555-0156'
              }
              ]

              export class HomeComponent implements OnInit {

              contacts = CONTACT_DATA;

              ngOnInit() {
                  console.log('my contacts: ', this.contacts);
                }

              addContact(contact: Contact) {
                  console.log('on new contact: ', contact);
                  // do whatever you want with the added contact
                }

                removeContact(contact: Contact) {
                  console.log('on removed contact: ', contact);
                  // do whatever you want with the deleted contact
                }

              }`;

  constructor(private titleService: Title,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-material-contacts');
  }

  showCopyMessage(content: string) {
    this.snackBar.open(`${content} copied`, 'OK', {
      duration: 3000
    });
  }

}
