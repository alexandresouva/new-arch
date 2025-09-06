import { JourneyService } from '@shared/services/journey.service';

export function setupJourneyServiceMock(): {
  journeyServiceMock: jasmine.SpyObj<JourneyService>;
} {
  const journeyServiceMock = jasmine.createSpyObj<JourneyService>(
    'JourneyService',
    ['getAllJourneys', 'getJourneyById']
  );

  return { journeyServiceMock };
}
