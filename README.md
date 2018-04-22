<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-material-contacts/master/demo/src/assets/logo.svg">
</p>

# ngx-material-contacts - Angular Library to manage contacts and users with a material deisgn

[![npm version](https://badge.fury.io/js/ngx-material-contacts.svg)](https://badge.fury.io/js/ngx-material-contacts),
[![Build Status](https://travis-ci.org/anthonynahas/ngx-material-contacts.svg?branch=master)](https://travis-ci.org/anthonynahas/ngx-material-contacts)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-material-contacts/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-material-contacts?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-material-contacts/status.svg)](https://david-dm.org/anthonynahas/ngx-material-contacts)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-material-contacts/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-material-contacts#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-material-contacts.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-material-contacts

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

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



## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

