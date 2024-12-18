"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const character_detail_page_1 = require("./character-detail.page");
describe('CharacterDetailPage', () => {
    let component;
    let fixture;
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(character_detail_page_1.CharacterDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
