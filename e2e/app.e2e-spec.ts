import { FrontEPage } from './app.po';

describe('front-e App', function() {
  let page: FrontEPage;

  beforeEach(() => {
    page = new FrontEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
