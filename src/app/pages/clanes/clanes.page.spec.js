"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const clanes_page_1 = require("./clanes.page");
const angular_1 = require("@ionic/angular");
describe('ClanesPage', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [clanes_page_1.ClanesPage],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(clanes_page_1.ClanesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should have a list of clans', () => {
        expect(component.clans.length).toBeGreaterThan(0);
    });
});
