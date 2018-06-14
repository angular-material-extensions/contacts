<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/contacts/master/demo/src/assets/logo.svg">
</p>

# @angular-material-extensions/contacts - Angular Library to manage contacts and users with a material design (Angular V6 supported)

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Fcontacts.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Fcontacts)
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/@angular-material-extensions/contacts)
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
   src="assets/demo2.gif">
</p>

<p align="center">
  <img alt="@angular-material-extensions/contacts" style="text-align: center;"
   src="assets/demo3.gif">
</p>

## Demo

View all the directives in action at https://anthonynahas.github.io/@angular-material-extensions/contacts


## Features
- Display contacts in a table including name, email, phone number and photo
- Delete a contact via event `onContactRemoved`
- Add a contact via event `onContactAdded`
- Validation for adding a new contact incl. name, email and phone number form controls

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher)

### Requirements (peer dependencies) - please instsall the packages before using @angular-material-extensions/contacts:
- [angular flex-layout v6.0.0-beta.16](https://www.npmjs.com/package/@angular/flex-layout)
- [angular material v6.2.1](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular cdk v6.2.1](https://www.npmjs.com/package/@angular/cdk)
- [angular animations v6.0.5](https://www.npmjs.com/package/@angular/animations)
- [angular forms v6.0.5](https://www.npmjs.com/package/@angular/forms)
- [ng2-avatar](https://www.npmjs.com/package/ng2-avatar)
- if you need a built in theme --> please let me know


```bash
npm i @angular/cdk @angular/material @angular/flex-layout @angular/animations @angular/forms ng2-avatar
```


## Installation
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

### Please checkout the full documentation [here](https://anthonynahas.github.io/@angular-material-extensions/contacts/doc/index.html) or follow the official [tutorial](https://anthonynahas.github.io/@angular-material-extensions/contacts/getting-started)

## Development

1. clone this [repo]()
2. Install the dependencies by running `npm i`
3. build the library `npm run build` or `gulp build`
To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

4. Link the library 
  - on windows `gulp link` or `locally npx gulp link`
  - on mac/linux `sudo gulp link` or locally `sudo npx gulp link`
  
 5. Navigate to the demo app
  - `cd demo`
  _ `npm i`
  _ `npm start`

extras
To lint all `*.ts` files:

```bash
$ npm run lint
```

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-material-pages](https://github.com/AnthonyNahas/ngx-material-pages)
- [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)


## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

