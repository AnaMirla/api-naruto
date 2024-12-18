"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterDetailPage = void 0;
const core_1 = require("@angular/core");
const character_modal_component_1 = require("./character-modal/character-modal.component");
let CharacterDetailPage = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-character-detail',
            templateUrl: './character-detail.page.html',
            styleUrls: ['./character-detail.page.scss'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CharacterDetailPage = _classThis = class {
        constructor(activatedRoute, modalController) {
            this.activatedRoute = activatedRoute;
            this.modalController = modalController;
            this.characterId = null;
            this.characters = [
                { id: 1, name: 'Amado', image: 'assets/characters/amado.jpg', clan: 'Unknown', status: 'Alive' },
                { id: 2, name: 'Boro', image: 'assets/characters/boro.jpg', clan: 'Kara', status: 'Deceased' },
                { id: 3, name: 'Deidara', image: 'assets/characters/deidara.jpg', clan: 'Unknown', status: 'Deceased' },
                { id: 4, name: 'Delta', image: 'assets/characters/delta.jpg', clan: 'Kara', status: 'Active' },
                { id: 5, name: 'Gaara', image: 'assets/characters/gaara.jpg', clan: 'Kazekage', status: 'Alive' },
                { id: 6, name: 'Hashirama Senju', image: 'assets/characters/hashirama.jpg', clan: 'Senju', status: 'Deceased' },
                { id: 7, name: 'Hinata Hyuga', image: 'assets/characters/hinata.jpg', clan: 'Hyuga', status: 'Alive' },
                { id: 8, name: 'Itachi Uchiha', image: 'assets/characters/itachi.jpg', clan: 'Uchiha', status: 'Deceased' },
                { id: 9, name: 'Jigen', image: 'assets/characters/jigen.jpg', clan: 'Kara', status: 'Deceased' },
                { id: 10, name: 'Jiraiya', image: 'assets/characters/jiraiya.jpg', clan: 'Unknown', status: 'Deceased' },
                { id: 11, name: 'Kakashi Hatake', image: 'assets/characters/kakashi.jpg', clan: 'Hatake', status: 'Alive' },
                { id: 12, name: 'Kashin Koji', image: 'assets/characters/kashin koji.jpg', clan: 'Kara', status: 'Alive' },
                { id: 13, name: 'Kisame Hoshigaki', image: 'assets/characters/kisamen.jpg', clan: 'Hoshigaki', status: 'Deceased' },
                { id: 14, name: 'Madara Uchiha', image: 'assets/characters/madara.jpg', clan: 'Uchiha', status: 'Deceased' },
                { id: 15, name: 'Minato Namikaze', image: 'assets/characters/minato.png', clan: 'Namikaze', status: 'Deceased' },
                { id: 16, name: 'Muta', image: 'assets/characters/muta.png', clan: 'Unknown', status: 'Deceased' },
                { id: 17, name: 'Naruto Uzumaki', image: 'assets/characters/naruto.jpg', clan: 'Uzumaki', status: 'Alive' },
                { id: 18, name: 'Neji Hyuga', image: 'assets/characters/neji.jpg', clan: 'Hyuga', status: 'Deceased' },
                { id: 19, name: 'Pain (Nagato)', image: 'assets/characters/pain.jpg', clan: 'Uzumaki', status: 'Deceased' },
                { id: 20, name: 'Sakura Haruno', image: 'assets/characters/sakura.jpg', clan: 'Haruno', status: 'Alive' },
                { id: 21, name: 'Sasori', image: 'assets/characters/sasori.jpg', clan: 'Unknown', status: 'Deceased' },
                { id: 22, name: 'Sasuke Uchiha', image: 'assets/characters/sasuke.jpg', clan: 'Uchiha', status: 'Alive' },
                { id: 23, name: 'Shino Aburame', image: 'assets/characters/shino.jpg', clan: 'Aburame', status: 'Alive' },
                { id: 24, name: 'Tobirama Senju', image: 'assets/characters/tobirama.jpg', clan: 'Senju', status: 'Deceased' },
                { id: 25, name: 'Tsunade', image: 'assets/characters/tusande.png', clan: 'Senju', status: 'Alive' },
                { id: 26, name: 'Karin', image: './assets/characters/karin.jpg', clan: 'Uzumaki', status: 'Alive' },
                { id: 27, name: 'Rock Lee', image: './assets/characters/rock lee.jpg', clan: 'None', status: 'Alive' },
                { id: 28, name: 'Ino Yamanaka', image: './assets/characters/ino.jpg', clan: 'Yamanaka', status: 'Alive' }
            ];
        }
        ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => {
                this.characterId = params['id'];
                if (this.characterId !== null) {
                    this.character = this.characters.find(c => c.id === this.characterId);
                }
            });
        }
        async openModal(character) {
            const modal = await this.modalController.create({
                component: character_modal_component_1.CharacterModalComponent,
                componentProps: { character }
            });
            await modal.present();
        }
    };
    __setFunctionName(_classThis, "CharacterDetailPage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CharacterDetailPage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CharacterDetailPage = _classThis;
})();
exports.CharacterDetailPage = CharacterDetailPage;
