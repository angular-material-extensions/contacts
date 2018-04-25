<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-material-contacts/master/demo/src/assets/logo.svg">
</p>

# ngx-material-contacts - Angular Library to manage contacts and users with a material deisgn

[![npm version](https://badge.fury.io/js/ngx-material-contacts.svg)](https://badge.fury.io/js/ngx-material-contacts),
[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-material-contacts)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-contacts/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-contacts?branch=master)
[![Build Status](https://travis-ci.org/anthonynahas/ngx-material-contacts.svg?branch=master)](https://travis-ci.org/anthonynahas/ngx-material-contacts)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-contacts/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-contacts?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-material-contacts/status.svg)](https://david-dm.org/anthonynahas/ngx-material-contacts)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-material-contacts/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-material-contacts#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-material-contacts.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ngx-material-contacts.svg?style=flat-square)](https://github.com/AnthonyNahas/ngx-material-contacts/blob/master/LICENSE)

<p align="center">
  <img alt="ngx-material-contacts" style="text-align: center;"
   src="assets/">
</p>

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-material-contacts


## Features
- Display contacts in a table including name, email, phone number and photo
- Delete a contact via event `onContactRemoved`
- Add a contact via event `onContactAdded`
- Validation for adding a new contact incl. name, email and phone number form controls

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

### Requirements (peer dependencies):
- [angular flex-layout ](https://www.npmjs.com/package/@angular/flex-layout)
- [angular material ](https://www.npmjs.com/package/@angular/material)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)
- [angular cdk ](https://www.npmjs.com/package/@angular/cdk)
- [angular animations ](https://www.npmjs.com/package/@angular/animations)
- [angular forms ](https://www.npmjs.com/package/@angular/forms)
- if you need a built in theme --> please let me know


```bash
npm i @angular/cdk @angular/material @angular/flex-layout @angular/animations @angular/forms 
```


## Installation
Install above dependencies via *npm*. 

Now install `ngx-material-contacts` via:
```shell
npm install --save ngx-material-contacts
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-material-contacts`:
```js
map: {
  'ngx-material-contacts': 'node_modules/ngx-material-contacts/bundles/ngx-material-contacts.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-material-contacts';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-material-contacts';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-material-contacts';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage

add the `ngx-material-contacts` element to your template:

```html
<ngx-material-contacts [contacts]="contacts"
                           [readonly]="false"
                           (onContactAdded)="addContact($event)"
                           (onContactRemoved)="removeContact($event)">
    </ngx-material-contacts>
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
    email: 'amanda.lee@ngx-material-contacts.de',
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

### Please checkout the full documentation [here](https://anthonynahas.github.io/ngx-material-contacts/doc/index.html) or follow the official [tutorial](https://anthonynahas.github.io/ngx-material-contacts/getting-started)

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
- [ngx-material-faq](https://github.com/AnthonyNahas/ngx-material-faq)
- [ngx-combination-generator](https://github.com/AnthonyNahas/combination-generator)


## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

