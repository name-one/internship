import { ToDOPage } from './app.po';

describe('to-do App', () => {
  let page: ToDOPage;

  beforeEach(() => {
    page = new ToDOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
