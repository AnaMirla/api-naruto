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
exports.VillagePage = void 0;
const core_1 = require("@angular/core");
const village_modal_page_1 = require("../village/village-modal/village-modal.page");
let VillagePage = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-village',
            templateUrl: './village.page.html',
            styleUrls: ['./village.page.scss'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var VillagePage = _classThis = class {
        constructor(modalController) {
            this.modalController = modalController;
            this.villages = [
                {
                    name: 'Konohagakure',
                    leader: 'Hokage (Naruto Uzumaki)',
                    symbol: './assets/aldeas/konohagakure/symbol_konohagakure.jpg',
                    characters: [
                        { name: 'Hiashi Hyuga', role: 'Líder del Clan Hyuga', image: './assets/aldeas/konohagakure/lider hyuga hiashi hyuga.jpg' },
                    ],
                },
                {
                    name: 'Sunagakure',
                    leader: 'Kazekage (Gaara)',
                    symbol: './assets/aldeas/sunagakure/sunagakure.jpg',
                    characters: [
                        { name: 'Gaara', role: 'Kazekage', image: './assets/aldeas/sunagakure/gaara.jpg' },
                        { name: 'Rasa', role: 'Cuarto Kazekage', image: './assets/aldeas/sunagakure/rasa.jpg' },
                        { name: 'Monzaemon', role: 'Inventor de Títeres', image: './assets/aldeas/sunagakure/monzaemon.png' },
                    ],
                },
                {
                    name: 'Kirigakure',
                    leader: 'Mizukage (Mei Terumi)',
                    symbol: './assets/aldeas/kirigakure/kirigakure.jpg',
                    characters: [
                        { name: 'Haku', role: 'Ninja de hielo', image: './assets/aldeas/kirigakure/haku.jpg' },
                        { name: 'Mei Terumi', role: 'Mizukage', image: './assets/aldeas/kirigakure/mei terumi.jpg' },
                        { name: 'Suigetsu Hozuki', role: 'Espadachín', image: './assets/aldeas/kirigakure/suigetsu hozuki.jpg' },
                    ],
                },
                {
                    name: 'Iwagakure',
                    leader: 'Tsuchikage (Kurotsuchi)',
                    symbol: './assets/aldeas/iwagakure/iwagakure.jpeg',
                    characters: [
                        { name: 'Kitsuchi', role: 'Comandante ninja', image: './assets/aldeas/iwagakure/kitsuchi.jpg' },
                        { name: 'Kurotsuchi', role: 'Tsuchikage', image: './assets/aldeas/iwagakure/kurotsuchi.jpg' },
                        { name: 'Shibi Kamizuru', role: 'Ninja de abejas', image: './assets/aldeas/iwagakure/shibi kamizuru.jfif' },
                    ],
                },
                {
                    name: 'Kumogakure',
                    leader: 'Raikage (Darui)',
                    symbol: './assets/aldeas/kumogakure/kumogakure.jpeg',
                    characters: [
                        { name: 'A (Raikage)', role: 'Anterior Raikage', image: './assets/aldeas/kumogakure/a raikage.jfif' },
                        { name: 'Darui', role: 'Actual Raikage', image: './assets/aldeas/kumogakure/dsarui.png' },
                    ],
                },
                {
                    name: 'Amegakure',
                    leader: 'Líder (Nagato)',
                    symbol: './assets/aldeas/amegakure/amegakure.jpeg',
                    characters: [
                        { name: 'Konan', role: 'Segunda al mando', image: './assets/aldeas/amegakure/konan.png' },
                        { name: 'Nagato (Pain)', role: 'Líder de Akatsuki', image: './assets/aldeas/amegakure/nagato pain.jpg' },
                    ],
                },
            ];
        }
        async openModal(village) {
            const modal = await this.modalController.create({
                component: village_modal_page_1.VillageModalPage,
                componentProps: { village }
            });
            return await modal.present();
        }
    };
    __setFunctionName(_classThis, "VillagePage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        VillagePage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return VillagePage = _classThis;
})();
exports.VillagePage = VillagePage;
