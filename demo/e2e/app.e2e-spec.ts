import { NgxMaterialContactsDemoPage } from './app.po';

describe('ngx-material-contacts-demo App', () => {
  let page: NgxMaterialContactsDemoPage;

  beforeEach(() => {
    page = new NgxMaterialContactsDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
