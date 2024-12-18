"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express")); // Manteniendo tu forma de importación de express
const cors = __importStar(require("cors")); // Manteniendo tu forma de importación de cors
const app = express();
app.use(cors());
const PORT = 3000;
const characters = [
    { name: 'Naruto Uzumaki', status: 'Alive', clan: 'Uzumaki' },
    { name: 'Sasuke Uchiha', status: 'Alive', clan: 'Uchiha' },
    { name: 'Sakura Haruno', status: 'Alive', clan: 'Haruno' },
    { name: 'Kakashi Hatake', status: 'Alive', clan: 'Hatake' },
    { name: 'Minato Namikaze', status: 'Dead', clan: 'Namikaze' },
    { name: 'Itachi Uchiha', status: 'Dead', clan: 'Uchiha' },
    { name: 'Jiraiya', status: 'Dead', clan: 'None' },
    { name: 'Tsunade Senju', status: 'Alive', clan: 'Senju' },
    { name: 'Gaara', status: 'Alive', clan: 'Kazekage Clan' },
    { name: 'Madara Uchiha', status: 'Dead', clan: 'Uchiha' }
];
// Definir correctamente los tipos Request y Response
app.get('/api', (req, res) => {
    res.json(characters);
});
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
