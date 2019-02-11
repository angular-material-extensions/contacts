<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.rawgit.com/angular-material-extensions/contacts/master/assets/angular-material-extensions-logo.svg">
</p>
# @angular-material-extensions/contacts - Angular Library to manage contacts and users with a material design (Angular V7 supported)

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Fcontacts.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Fcontacts)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/contacts)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/contacts/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/contacts)
[![Build Status](https://travis-ci.org/angular-material-extensions/contacts.svg?branch=master)](https://travis-ci.org/angular-material-extensions/contacts)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/contacts/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/contacts?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/contacts/status.svg)](https://david-dm.org/angular-material-extensions/contacts)
[![devDependency Status](https://david-dm.org/angular-material-extensions/contacts/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/contacts#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/contacts.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/contacts.svg?style=flat-square)](https://github.com/AnthonyNahas/@angular-material-extensions/contacts/blob/master/LICENSE)

> This project has been moved from [ngx-material-contacts](https://www.npmjs.com/package/ngx-material-contacts) to [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)

<p align="center">
  <img alt="@angular-material-extensions/contacts" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/contacts/HEAD/assets/demo2.gif">
</p>

<p align="center">
  <img alt="@angular-material-extensions/contacts" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/contacts/HEAD/assets/demo3.gif">
</p>

## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/contacts/issues)

If did you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Additional Requirements - material icons](#additional-requirements-material-icons)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/contacts)

View all the directives and components in action at [https://angular-material-extensions.github.io/contacts](https://angular-material-extensions.github.io/contacts)

<a name="features"/>

## Features
- Display contacts in a table including name, email, phone number and photo
- Delete a contact via event `onContactRemoved`
- Add a contact via event `onContactAdded`
- Validation for adding a new contact incl. name, email and phone number form controls

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) - angular V7 is supported

<a name="peerDependencies"/>

### Requirements (peer dependencies) - please install the packages before using @angular-material-extensions/contacts:
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular material v7.x](https://www.npmjs.com/package/@angular/material)
- [angular cdk v7.x](https://www.npmjs.com/package/@angular/cdk)
- [angular animations v7.x](https://www.npmjs.com/package/@angular/animations)
- [angular forms v7.x](https://www.npmjs.com/package/@angular/forms)
- [angular flex-layout v7.0.0-beta.23](https://www.npmjs.com/package/@angular/flex-layout)
- [ng2-avatar](https://www.npmjs.com/package/ng2-avatar)
- if you need a built in theme --> please let me know


```bash
npm i @angular/cdk @angular/material @angular/flex-layout @angular/animations @angular/forms ng2-avatar
```


<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

<a name="additional-requirements-material-icons"/>

## Additional Requirements - Import the material design icons [learn more](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

- The easiest way to import material design icons is to provide a link in your `index.html` file like below:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

- alternative solution:

1. Install of the official npm module of the material design icons

```bash
npm i -s material-design-icons
```

2. Import them in your `angular.json` file

```json
"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],
```  

----

<a name="installation"/>

## [Installation](https://angular-material-extensions.github.io/contacts/getting-started)
Install above dependencies via *npm*. 

Now install `@angular-material-extensions/contacts` via:
```shell
npm install --save @angular-material-extensions/contacts
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@angular-material-extensions/contacts`:
```js
map: {
  '@angular-material-extensions/contacts': 'node_modules/@angular-material-extensions/contacts/bundles/@angular-material-extensions/contacts.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { NgxMaterialPagesModule } from '@angular-material-extensions/contacts';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxMaterialPagesModule .forRoot()`):
```js
import { NgxMaterialPagesModule } from '@angular-material-extensions/contacts';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxMaterialPagesModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxMaterialPagesModule `:

```js
import { NgxMaterialPagesModule } from '@angular-material-extensions/contacts';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxMaterialPagesModule, ...], 
})
export class OtherModule {
}
```

<a name="usage"/>

## Usage

add the `@angular-material-extensions/contacts` element to your template:

```html
<mat-contacts [contacts]="contacts"
              [readonly]="false"
              (onContactAdded)="addContact($event)"
              (onContactRemoved)="removeContact($event)">
</mat-contacts>
```

in your component --> 

```typescript
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
    email: 'amanda.lee@@angular-material-extensions/contacts.de',
    photoURL: '../../../assets/profiles/1p60.png',
    phoneNumber: '+1-502-555-0156'
  }
  ]
```

```typescript
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

  }
  
```

## Contact's interface

```typescript
export interface Contact {
  id?: string;
  name: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
}
```

<a name="documentation"/>

## [Documentation](https://angular-material-extensions.github.io/contacts/doc/index.html)

Please checkout the full documentation [here](https://anthonynahas.github.io/@angular-material-extensions/contacts/doc/index.html) 
or follow the official [tutorial](https://anthonynahas.github.io/@angular-material-extensions/contacts/getting-started)

<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/angular-material-extensions/contacts.git) by running
```bash
$ git clone https://github.com/angular-material-extensions/contacts.git
```

- link the **@angular-material-extensions/contacts** package
```bash
$ gulp link
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted by `http://localhost:4200/`


<a name="development"/>

## Development

1. clone this [repo](https://github.com/angular-material-extensions/contacts.git)
2. Install the dependencies by running `npm i`
3. build the library `npm run build` or `gulp build`

```bash
$ npm run build
```
4. Link the library 
  - `gulp link` 
  
 5. Navigate to the demo app
  - `cd demo`
  _ `npm i`
  _ `npm start`

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/freelancer-theme](https://github.com/angular-material-extensions/freelancer-theme)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/contacts/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/contacts/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2018 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

