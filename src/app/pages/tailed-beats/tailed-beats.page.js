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
exports.TailedBeatsPage = void 0;
const core_1 = require("@angular/core");
let TailedBeatsPage = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-tailed-beats',
            templateUrl: './tailed-beats.page.html',
            styleUrls: ['./tailed-beats.page.scss'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var TailedBeatsPage = _classThis = class {
        constructor() {
            this.bestiasList = [
                {
                    name: 'Choemi',
                    image: 'assets/tealed beats/chomei.jpg',
                    description: 'Choemi, también conocida como la Bestia de Seis Colas, es una criatura poderosa con la habilidad de controlar el viento. Su naturaleza pacífica la hace una de las bestias más benevolentes, aunque su fuerza es increíblemente destructiva en combate.'
                },
                {
                    name: 'Gyuki',
                    image: 'assets/tealed beats/Gyuki.jpg',
                    description: 'Gyuki es la Bestia de Ocho Colas, conocida por su gran fuerza y su capacidad para utilizar poderosos ataques de energía. Es un ser extremadamente sabio y tiene una relación compleja con su jinchūriki, el octavo Hokage.'
                },
                {
                    name: 'Isobu',
                    image: 'assets/tealed beats/Isobu.jpg',
                    description: 'Isobu, la Bestia de Tres Colas, es una criatura acuática con una gran resistencia. A pesar de su apariencia tranquila, su poder puede desatar enormes tormentas marinas que arrasan con todo a su paso.'
                },
                {
                    name: 'Juubi',
                    image: 'assets/tealed beats/juubi.jpg',
                    description: 'El Juubi, también conocido como la Bestia de Diez Colas, es la criatura más poderosa de todas. Con su capacidad para desatar destrucción masiva y su conexión con el chakra de todos los seres vivos, su poder es prácticamente ilimitado.'
                },
                {
                    name: 'Kokuo',
                    image: 'assets/tealed beats/Kokuo.jpg',
                    description: 'Kokuo, la Bestia de Cinco Colas, se caracteriza por su gran velocidad y la habilidad de manipular el agua. Su jinchūriki, el Quinto Hokage, posee una conexión especial con ella debido a su poder y lealtad mutuos.'
                },
                {
                    name: 'Kurama',
                    image: 'assets/tealed beats/kurama.jpg',
                    description: 'Kurama, la Bestia de Nueve Colas, es una de las criaturas más temidas en el mundo. Con su inmenso poder y su capacidad para generar ondas de energía destructivas, Kurama tiene un vínculo profundo con su jinchūriki, Naruto Uzumaki.'
                },
                {
                    name: 'Matatabi',
                    image: 'assets/tealed beats/matatabi.png',
                    description: 'Matatabi, la Bestia de Dos Colas, es conocida por su fuego azul que puede calentar incluso el aire a su alrededor. Es una bestia feroz, pero también tiene un sentido de lealtad muy fuerte hacia aquellos que la entienden.'
                },
                {
                    name: 'Saien',
                    image: 'assets/tealed beats/saiken.jpg',
                    description: 'Saien, la Bestia de Ocho Colas, es una criatura tranquila y compasiva, aunque su poder es innegable. Su habilidad para manipular el agua y el vapor la convierte en una adversaria formidable en combate.'
                },
                {
                    name: 'Shukaku',
                    image: 'assets/tealed beats/Shukaku.png',
                    description: 'Shukaku, la Bestia de Una Cola, es conocida por su personalidad solitaria y su capacidad para manipular la arena. A pesar de su naturaleza salvaje, tiene una conexión profunda con su jinchūriki, Gaara.'
                },
                {
                    name: 'Son Goku',
                    image: 'assets/tealed beats/son_goku.jpg',
                    description: 'Son Goku, la Bestia de Cuatro Colas, es una criatura espiritual que ha estado vinculada a la humanidad desde tiempos remotos. Su poder se basa en el fuego y la lava, y es una de las bestias más sabias y poderosas en la historia.'
                }
            ];
        }
        openModal(bestia) {
            console.log('Abriendo modal para', bestia);
        }
    };
    __setFunctionName(_classThis, "TailedBeatsPage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TailedBeatsPage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TailedBeatsPage = _classThis;
})();
exports.TailedBeatsPage = TailedBeatsPage;
