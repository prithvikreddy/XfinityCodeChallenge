import { ComcastTestPage } from './app.po';

describe('comcast-test App', () => {
  let page: ComcastTestPage;

  beforeEach(() => {
    page = new ComcastTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
