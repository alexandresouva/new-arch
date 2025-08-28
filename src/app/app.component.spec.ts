import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  template: ''
})
class LayoutStubComponent {}

async function setup() {
  await TestBed.configureTestingModule({
    imports: [AppComponent]
  })
    .overrideComponent(AppComponent, {
      set: { imports: [LayoutStubComponent] }
    })
    .compileComponents();

  const fixture = TestBed.createComponent(AppComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();

  return { fixture, component };
}

describe('AppComponent', () => {
  it('should create the app', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });
});
