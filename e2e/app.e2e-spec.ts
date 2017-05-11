import { BlogNG4Page } from './app.po';

describe('blog-ng4 App', () => {
  let page: BlogNG4Page;

  beforeEach(() => {
    page = new BlogNG4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
