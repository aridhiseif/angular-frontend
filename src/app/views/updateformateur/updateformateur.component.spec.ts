/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {UpdateformateurComponent} from './updatecourse.component';

describe('UpdateformateurComponent', () => {
    let component: UpdateformateurComponent;
    let fixture: ComponentFixture<UpdateformateurComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [UpdateformateurComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateformateurComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
