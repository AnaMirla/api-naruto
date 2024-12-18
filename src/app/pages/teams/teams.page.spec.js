"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const teams_page_1 = require("./teams.page");
describe('TeamsPage', () => {
    let component;
    let fixture;
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(teams_page_1.TeamsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
