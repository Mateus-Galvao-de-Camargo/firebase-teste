import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonagemComponent } from './list-personagem.component';

describe('ListPersonagemComponent', () => {
  let component: ListPersonagemComponent;
  let fixture: ComponentFixture<ListPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersonagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
