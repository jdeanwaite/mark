import { MarkAngularPage } from './app.po';

describe('mark-angular App', function() {
  let page: MarkAngularPage;

  beforeEach(() => {
    page = new MarkAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
