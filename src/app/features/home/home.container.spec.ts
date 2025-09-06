import { TestBed } from '@angular/core/testing';
import { HomeContainer } from './home.container';
import { setupI18nServiceMock } from '@shared/test/mocks/services/i18n.service.mock';
import { I18nService } from '@core/i18n/i18n.service';
import { setupJourneyServiceMock } from '@shared/test/mocks/services/journey.service.mock';
import { JourneyService } from '@shared/services/journey.service';

async function setup() {
  const { i18nServiceMock } = setupI18nServiceMock();
  const { journeyServiceMock } = setupJourneyServiceMock();

  await TestBed.configureTestingModule({
    imports: [HomeContainer],
    providers: [
      { provide: I18nService, useValue: i18nServiceMock },
      { provide: JourneyService, useValue: journeyServiceMock }
    ]
  }).compileComponents();

  const fixture = TestBed.createComponent(HomeContainer);
  const component = fixture.componentInstance;
  fixture.detectChanges();

  return { fixture, component };
}

describe('HomeContainer', () => {
  it('should create', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });
});
