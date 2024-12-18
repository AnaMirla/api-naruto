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
exports.TeamsPage = void 0;
const core_1 = require("@angular/core");
const teams_modal_page_1 = require("../teams/teams-modal/teams-modal.page");
let TeamsPage = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-teams',
            templateUrl: './teams.page.html',
            styleUrls: ['./teams.page.scss'],
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var TeamsPage = _classThis = class {
        constructor(modalController) {
            this.modalController = modalController;
            this.teams = [
                {
                    name: 'Team 7',
                    image: 'assets/teams/equipos/equipo 7/kakashi.jpg',
                    leader: 'Kakashi Hatake',
                    members: [
                        { name: 'Naruto Uzumaki', image: 'assets/teams/naruto.jpg' },
                        { name: 'Sasuke Uchiha', image: 'assets/teams/sasuke.jpg' },
                        { name: 'Sakura Haruno', image: 'assets/teams/sakura.jpg' }
                    ]
                },
                {
                    name: 'Team 10',
                    image: 'assets/teams/equipos/equipo 10/asuma.jpg',
                    leader: 'Asuma Sarutobi',
                    members: [
                        { name: 'Shikamaru Nara', image: 'assets/teams/equipos/equipo 10/shikamaru.jpg' },
                        { name: 'Choji Akimichi', image: 'assets/teams/equipos/equipo 10/choji.jpg' },
                        { name: 'Ino Yamanaka', image: 'assets/teams/equipos/equipo 10/ino.jpg' }
                    ]
                },
                {
                    name: 'Team 8',
                    image: 'assets/teams/equipos/equipo 8/kiba.jpg',
                    leader: 'Kiba Inuzuka',
                    members: [
                        { name: 'Kiba Inuzuka', image: 'assets/teams/equipos/equipo 8/kiba.jpg' },
                        { name: 'Hinata Hyuga', image: 'assets/teams/equipos/equipo 8/hinata.jfif' },
                        { name: 'Shino Aburame', image: 'assets/teams/equipos/equipo 8/shino.jpg' }
                    ]
                },
                {
                    name: 'Team 5',
                    image: 'assets/teams/equipos/equipo 5/tsunade.jpeg',
                    leader: 'Tsunade Senju',
                    members: [
                        { name: 'Karin Uzumaki', image: 'assets/teams/equipos/equipo 5/karin.jpg' },
                        { name: 'Sasuke Uchiha', image: 'assets/teams/equipos/equipo 5/sasuke.jpg' },
                        { name: 'Sakura Haruno', image: 'assets/teams/equipos/equipo 5/sakura.jpg' }
                    ]
                },
                {
                    name: 'Team 11',
                    image: 'assets/teams/equipos/equipo 11/killer bee.jpg',
                    leader: 'Killer Bee',
                    members: [
                        { name: 'Killer Bee', image: 'assets/teams/equipos/equipo 11/killer bee.jpg' },
                        { name: 'A', image: 'assets/teams/equipos/equipo 11/A.jpg' },
                        { name: 'Gai', image: 'assets/teams/equipos/equipo 11/Maito Gai.png' }
                    ]
                },
                {
                    name: 'Team 9',
                    image: 'assets/teams/equipos/equipo 9/sai.jpg',
                    leader: 'Sai',
                    members: [
                        { name: 'Naruto Uzumaki', image: 'assets/teams/equipos/equipo 9/naruto.jpg' },
                        { name: 'Sasuke Uchiha', image: 'assets/teams/equipos/equipo 9/sasuke.jpg' },
                        { name: 'Sakura Haruno', image: 'assets/teams/equipos/equipo 9/sakura.jpg' }
                    ]
                },
                {
                    name: 'Team 6',
                    image: 'assets/teams/equipos/equipo 6/equipo6.png',
                    leader: 'Might Guy',
                    members: [
                        { name: 'Rock Lee', image: 'assets/teams/equipos/equipo 6/rock lee.jpg' },
                        { name: 'Neji Hyuga', image: 'assets/teams/equipos/equipo 6/neji.jpg' },
                        { name: 'Tenten', image: 'assets/teams/equipos/equipo 6/tenten.jpeg' }
                    ]
                },
                {
                    name: 'Team 12',
                    image: 'assets/teams/equipos/equipo 12/hanko.jpg',
                    leader: 'Anko Mitarashi',
                    members: [
                        { name: 'Karin Uzumaki', image: 'assets/teams/equipos/equipo 12/karin.jpg' },
                        { name: 'Sasuke Uchiha', image: 'assets/teams/equipos/equipo 12/sasuke.jpg' },
                        { name: 'Sakura Haruno', image: 'assets/teams/equipos/equipo 12/sakura.jpg' }
                    ]
                },
                {
                    name: 'Team 13',
                    image: 'assets/teams/equipos/equipo 13/kabuto.jpg',
                    leader: 'Kabuto Yakushi',
                    members: [
                        { name: 'Kabuto Yakushi', image: 'assets/teams/equipos/equipo 13/kabuto.jpg' },
                        { name: 'Orochimaru', image: 'assets/teams/equipos/equipo 13/oroshimaru.jfif' },
                        { name: 'Sasori', image: 'assets/teams/equipos/equipo 13/sasory.jpg' }
                    ]
                },
                {
                    name: 'Team 3',
                    image: 'assets/teams/equipos/equipo 3/sarutobi.jpg',
                    leader: 'Hiruzen Sarutobi',
                    members: [
                        { name: 'Tsunade Senju', image: 'assets/teams/equipos/equipo 3/tsunade.jpeg' },
                        { name: 'Jiraiya', image: 'assets/teams/equipos/equipo 3/jiraiya.jpg' },
                        { name: 'Orochimaru', image: 'assets/teams/equipos/equipo 3/oroshimaru.jfif' }
                    ]
                }
            ];
        }
        async openModal(team) {
            const modal = await this.modalController.create({
                component: teams_modal_page_1.TeamsModalPage,
                componentProps: { team }
            });
            return await modal.present();
        }
    };
    __setFunctionName(_classThis, "TeamsPage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TeamsPage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TeamsPage = _classThis;
})();
exports.TeamsPage = TeamsPage;
