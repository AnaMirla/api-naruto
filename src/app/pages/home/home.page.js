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
exports.HomePage = void 0;
const core_1 = require("@angular/core");
let HomePage = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var HomePage = _classThis = class {
        constructor(narutoService) {
            this.narutoService = narutoService;
            this.characters = [
                { name: 'Naruto Uzumaki', image: 'assets/characters/naruto.jpg', status: 'Alive', clan: 'Uzumaki' },
                { name: 'Sasuke Uchiha', image: 'assets/characters/sasuke.jpg', status: 'Alive', clan: 'Uchiha' },
                { name: 'Sakura Haruno', image: 'assets/characters/sakura.jpg', status: 'Alive', clan: 'Haruno' },
                { name: 'Kakashi Hatake', image: 'assets/characters/kakashi.jpg', status: 'Alive', clan: 'Hatake' },
                { name: 'Minato Namikaze', image: 'assets/characters/minato.png', status: 'Dead', clan: 'Namikaze' },
                { name: 'Itachi Uchiha', image: 'assets/characters/itachi.jpg', status: 'Dead', clan: 'Uchiha' },
                { name: 'Jiraiya', image: 'assets/characters/jiraiya.jpg', status: 'Dead', clan: 'None' },
                { name: 'Tsunade Senju', image: 'assets/characters/tusande.png', status: 'Alive', clan: 'Senju' },
                { name: 'Gaara', image: 'assets/characters/gaara.jpg', status: 'Alive', clan: 'Kazekage Clan' },
                { name: 'Madara Uchiha', image: 'assets/characters/madara.jpg', status: 'Dead', clan: 'Uchiha' },
            ];
        }
        ngOnInit() {
            // Intentamos cargar los datos de la API
            this.narutoService.getCharacters().subscribe((data) => {
                this.characters = data; // Si la API responde, reemplazamos los datos
            }, (error) => {
                console.error('Error al consumir la API', error);
                // Si la API falla, seguimos mostrando los datos predeterminados
            });
        }
    };
    __setFunctionName(_classThis, "HomePage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HomePage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HomePage = _classThis;
})();
exports.HomePage = HomePage;
