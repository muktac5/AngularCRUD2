import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancepolicyholdersComponent } from './insurancepolicyholders.component';

describe('InsurancepolicyholdersComponent', () => {
  let component: InsurancepolicyholdersComponent;
  let fixture: ComponentFixture<InsurancepolicyholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancepolicyholdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancepolicyholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
