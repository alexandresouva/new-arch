import { TestBed } from '@angular/core/testing';
import { I18nPipe } from './i18n.pipe';
import { I18nService } from '../i18n.service';
import { setupI18nServiceMock } from '../../../shared/test/mock/i18n.service.mock';

async function setup() {
  const { i18nServiceMock } = setupI18nServiceMock();

  await TestBed.configureTestingModule({
    providers: [I18nPipe, { provide: I18nService, useValue: i18nServiceMock }]
  }).compileComponents();

  const pipe = TestBed.inject(I18nPipe);

  return { pipe, i18nServiceMock };
}

describe('I18nPipe', () => {
  it('should create an instance', async () => {
    const { pipe } = await setup();
    expect(pipe).toBeTruthy();
  });

  it('should translate key using service', async () => {
    const { pipe, i18nServiceMock } = await setup();
    const inputValue = 'test.hello';
    const mockedOutput = 'Olá Mundo';

    i18nServiceMock.translate.and.returnValue(mockedOutput);
    const result = pipe.transform(inputValue);

    expect(i18nServiceMock.translate).toHaveBeenCalledWith(inputValue);
    expect(result).toBe(mockedOutput);
  });

  it('should return key if translation not found', async () => {
    const { pipe, i18nServiceMock } = await setup();
    const inputValue = 'missingKey';

    i18nServiceMock.translate.and.returnValue(undefined);
    const result = pipe.transform(inputValue);

    expect(i18nServiceMock.translate).toHaveBeenCalledWith(inputValue);
    expect(result).toBe(inputValue);
  });
});
