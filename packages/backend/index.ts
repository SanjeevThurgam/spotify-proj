import express, { Request, Response } from 'express';
import request from 'request';
import axios from 'axios';
import dotenv from 'dotenv';
import { generateRandomString } from './src/Utils';
import { URLSearchParams } from 'url';
import { access } from 'fs';

const port = 5001;

let access_token = '';

dotenv.config();

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const app = express();

app.get('/myApi/auth/login', (req: Request, res: Response) => {
  console.log("hit login callback");
  const scope = "streaming \
             user-read-email \
             user-read-private";

  const state = generateRandomString(16);

  const auth_query_parameters = new URLSearchParams({
      response_type: "code",
      client_id: spotify_client_id,
      scope: scope,
      redirect_uri: "http://localhost:3000/myApi/auth/callback",
      state: state
  } as any);

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
});

app.get('/myApi/auth/callback', (req: Request, res: Response) => {
  console.log("hit callback endpoint");
  const code = req.query.code;

  const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
          code: code,
          redirect_uri: "http://localhost:3000/myApi/auth/callback",
          grant_type: 'authorization_code'
      },
      headers: {
          'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
          'Content-Type' : 'application/x-www-form-urlencoded'
      },
      json: true
  };

  request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
          access_token = body.access_token;
          res.redirect('/')
      }
  });
});

app.get('/myApi/auth/token', (req, res) => {
  res.json(
     {
        access_token: access_token
     })
})

app.get('/myApi/search', (req, res) => {
  console.log('hit search endpoint');
  // console.log(req);
  // TODO: Phase 2: Call the Search API on behalf of the client
  // console.log(req.query.searchText);
  //TODO: Get the search query from the request
  // const searchOptions = {
  //   url: `https://api.spotify.com/v1/search?q=name:${req.query.searchText}&type=track`,
  //   headers: {
  //       'Authorization': 'Bearer ' + access_token,
  //       'Content-Type' : 'application/json'
  //   },
  // };
  // console.log(req.query.queryParams);

  axios.get("https://api.spotify.com/v1/search", {
    params: {
      q: req.query.queryParams,
      type: 'track',
      limit: '5'
    },
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    }
  }).then(({ data }) => {
    // console.log(data)
    const tracks = data.tracks.items;
    const result = tracks.map((track: any) => {
      return {
        title: track.name,
        subtitle: track.artists[0].name,
        imageUrl: track.album.images[0].url,
      }
    })
    res.json(result);
    // console.log("Respose from spotify");
  })

  // request.get(searchOptions, (error, response, body) => {
  //   if (!error && response.statusCode === 200) {
  //     res.redirect('/')
  //     res.status(200).send(JSON.parse(body));
  //   } else {
  //     res.status(response.statusCode).send(error);
  //   }
  // });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
