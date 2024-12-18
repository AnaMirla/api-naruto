"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const home_page_1 = require("./home.page");
describe('HomePage', () => {
    let component;
    let fixture;
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(home_page_1.HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
