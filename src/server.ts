import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();

app.use(cors({
  origin: 'http://localhost:8100', // Cambia este valor al puerto que Ionic está usando
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}));


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

app.get('/api', (req: Request, res: Response) => {
  res.json(characters);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}/api`);
});
