"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const kekkei_genkai_modal_page_1 = require("./kekkei-genkai-modal.page");
describe('KekkeiGenkaiModalPage', () => {
    let component;
    let fixture;
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(kekkei_genkai_modal_page_1.KekkeiGenkaiModalPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
