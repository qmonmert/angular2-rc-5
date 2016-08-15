export class Angular2Rc5Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-rc-5-app h1')).getText();
  }
}
