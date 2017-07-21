import { GeocacheSitePage } from './app.po';

describe('geocache-site App', () => {
  let page: GeocacheSitePage;

  beforeEach(() => {
    page = new GeocacheSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
