import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { I18nService } from '@core/i18n/i18n.service';
import { setupI18nServiceMock } from '@shared/test/mocks/services/i18n.service.mock';

async function setup() {
  const { i18nServiceMock } = setupI18nServiceMock();

  await TestBed.configureTestingModule({
    imports: [HomeComponent],
    providers: [{ provide: I18nService, useValue: i18nServiceMock }]
  }).compileComponents();

  const fixture = TestBed.createComponent(HomeComponent);
  fixture.componentRef.setInput('journeys', []);
  fixture.componentRef.setInput('tableHeaders', []);

  const component = fixture.componentInstance;
  fixture.detectChanges();

  return { fixture, component };
}

describe('HomeComponent', () => {
  it('should create', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it('should have empty columns if no tableHeaders are provided', async () => {
    const { component } = await setup();
    expect(component['columns']()).toEqual([]);
  });

  it('should compute columns based on tableHeaders input', async () => {
    const { fixture, component } = await setup();
    const mockTableHeaders = [
      { columnDef: 'description', header: 'Description' },
      { columnDef: 'statusCode', header: 'Status' }
    ];
    fixture.componentRef.setInput('tableHeaders', mockTableHeaders);

    expect(component['columns']()).toEqual(['description', 'statusCode']);
  });
});
