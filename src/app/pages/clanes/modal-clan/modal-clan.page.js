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
exports.ModalClanPage = void 0;
const core_1 = require("@angular/core");
let ModalClanPage = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-modal-clan',
            templateUrl: './modal-clan.page.html',
            styleUrls: ['./modal-clan.page.scss'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _clan_decorators;
    let _clan_initializers = [];
    let _clan_extraInitializers = [];
    var ModalClanPage = _classThis = class {
        constructor(modalController) {
            this.modalController = modalController;
            this.clan = __runInitializers(this, _clan_initializers, 'Aburame');
            this.clanData = (__runInitializers(this, _clan_extraInitializers), {
                Aburame: [
                    { name: 'Shino Aburame', image: 'assets/clanes/naruto/aburame/shino.jpg' },
                    { name: 'Muta Aburame', image: 'assets/clanes/naruto/aburame/muta.png' },
                ],
                Uchiha: [
                    { name: 'Itachi Uchiha', image: 'assets/clanes/naruto/uchiha/itachi.jpg' },
                    { name: 'Sasuke Uchiha', image: 'assets/clanes/naruto/uchiha/sasuke.jpg' },
                ],
                Senju: [
                    { name: 'Hashirama Senju', image: 'assets/clanes/naruto/senju/hashirama.jpg' },
                    { name: 'Tobirama Senju', image: 'assets/clanes/naruto/senju/tobirama.jpg' },
                ],
                Uzumaki: [
                    { name: 'Naruto Uzumaki', image: 'assets/characters/naruto.jpg' },
                    { name: 'Kushina Uzumaki', image: 'assets/clanes/naruto/kushina uzumaki.png' },
                ],
                Hyuga: [
                    { name: 'Hinata Hyuga', image: 'assets/clanes/naruto/hyuga/hinata.jpg' },
                    { name: 'Neji Hyuga', image: 'assets/clanes/naruto/hyuga/neji.jpg' },
                ],
            });
        }
        getCharacters() {
            return this.clanData[this.clan] || [];
        }
        dismissModal() {
            this.modalController.dismiss();
        }
    };
    __setFunctionName(_classThis, "ModalClanPage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _clan_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _clan_decorators, { kind: "field", name: "clan", static: false, private: false, access: { has: obj => "clan" in obj, get: obj => obj.clan, set: (obj, value) => { obj.clan = value; } }, metadata: _metadata }, _clan_initializers, _clan_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ModalClanPage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ModalClanPage = _classThis;
})();
exports.ModalClanPage = ModalClanPage;
