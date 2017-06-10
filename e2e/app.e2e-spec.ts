import { VideoWebPage } from './app.po';

describe('video-web App', function() {
  let page: VideoWebPage;

  beforeEach(() => {
    page = new VideoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
