import { CLiNewPage } from './app.po';

describe('cli-new App', function() {
  let page: CLiNewPage;

  beforeEach(() => {
    page = new CLiNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
