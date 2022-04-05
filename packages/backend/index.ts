import express, { Request, Response } from 'express';
import request from 'request';
import axios from 'axios';
import dotenv from 'dotenv';
import { generateRandomString } from './src/Utils';
import { URLSearchParams } from 'url';

const port = 5001;

const access_token = '';

dotenv.config();

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const app = express();

app.get('/myApi/auth/login', (req: Request, res: Response) => {
  console.log('hit login callback');
  // TODO: Phase 1
});

app.get('/myApi/auth/callback', (req: Request, res: Response) => {
  console.log('hit callback endpoint');
  // TODO: Phase 1
});

app.get('/myApi/auth/token', (req, res) => {
  console.log('hit token endpoint');
  // TODO: Phase 1
});

app.get('/myApi/search', (req, res) => {
  console.log('hit search endpoint');
  // TODO: Phase 2: Call the Search API on behalf of the client
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
