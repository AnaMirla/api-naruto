"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const modal_clan_page_1 = require("./modal-clan.page");
const angular_1 = require("@ionic/angular");
describe('ModalClanPage', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [modal_clan_page_1.ModalClanPage],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(modal_clan_page_1.ModalClanPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should return the correct characters for the Uchiha clan', () => {
        component.clan = 'Uchiha';
        // Asumiendo que getCharacters() devuelve una lista de objetos con 'name' e 'image'
        const expectedCharacters = [
            { name: 'Sasuke Uchiha', image: 'sasuke-image.jpg' },
            { name: 'Itachi Uchiha', image: 'itachi-image.jpg' }
        ];
        // Aquí comparas los objetos completos
        expect(component.getCharacters()).toEqual(expectedCharacters);
    });
});
