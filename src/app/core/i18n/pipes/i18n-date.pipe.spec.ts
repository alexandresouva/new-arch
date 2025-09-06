import { I18nDatePipe } from './i18n-date.pipe';

xdescribe('I18nDatePipe', () => {
  it('create an instance', () => {
    const pipe = new I18nDatePipe();
    expect(pipe).toBeTruthy();
  });
});
