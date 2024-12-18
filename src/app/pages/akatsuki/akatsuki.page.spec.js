"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const akatsuki_page_1 = require("./akatsuki.page");
describe('AkatsukiPage', () => {
    let component;
    let fixture;
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(akatsuki_page_1.AkatsukiPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
