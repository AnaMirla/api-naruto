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
exports.KaraPage = void 0;
const core_1 = require("@angular/core");
const kara_modal_page_1 = require("./kara-modal/kara-modal.page");
let KaraPage = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-kara',
            templateUrl: './kara.page.html',
            styleUrls: ['./kara.page.scss'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var KaraPage = _classThis = class {
        constructor(modalController) {
            this.modalController = modalController;
            this.karaMembers = [
                { name: 'Jigen', image: 'assets/clanes/naruto/kara/jigen.jpg', clan: 'Kara' },
                { name: 'Kashin Koji', image: 'assets/clanes/naruto/kara/kashin koji.jpg', clan: 'Kara' },
                { name: 'Delta', image: 'assets/clanes/naruto/kara/delta.jpg', clan: 'Kara' },
                { name: 'Amado', image: 'assets/clanes/naruto/kara/amado.jpg', clan: 'Kara' },
                { name: 'Boro', image: 'assets/clanes/naruto/kara/boro.jpg', clan: 'Kara' }
            ];
        }
        async openModal(member) {
            const modal = await this.modalController.create({
                component: kara_modal_page_1.KaraModalPage,
                componentProps: { member }
            });
            return await modal.present();
        }
    };
    __setFunctionName(_classThis, "KaraPage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        KaraPage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return KaraPage = _classThis;
})();
exports.KaraPage = KaraPage;
