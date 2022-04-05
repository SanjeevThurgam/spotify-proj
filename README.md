# Week 5 – Basic Backend

You don't have to be going on a trip to say _"bon voyage"_.

## Getting Started

Make a copy and run `git checkout -b development` and `yarn` as usual.

To start the project, run `yarn start` inside `packages/backend/` to start the Node server, then `yarn start` a second time inside `packages/frontend/` to start the React server.

The folder structure looks a bit different this time – there’s a folder for backend and one for frontend:

```
├── packages
│ └───backend
│     ├── package.json
│     └── index.ts
│ └───frontend
│     ├───public
│        │   ...
│     ├───src
│        │   ...
│     └── package.json
│ └───shared
│     └── package.json
├── package.json
├── yarn.lock
└── ...
```

- We used [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to install the dependencies for the `frontend`, `backend`, and `shared` packages with a single `yarn` command.

Shared is empty for now, but will come into play during next week’s project with GraphQL.

<details>
<summary>If you’re curious as to why we broke up the folders in this way...</summary>

- Backend and frontend are often deployed to different places

- Next week, shared will contain our GraphQL TypeScript definitions that are used by both packages

- Keep dependencies separate, and give yarn more latitude to de-dupe packages across the whole project

- Eliminate cyclical dependencies
</details>

---

## Phases

Project is creating a client using the Spotify API. You will first create a web player that can be controlled using Spotify Connect, then interact with the Search API to get information based on arbitrary input. This project will also be an exercise in Redux principles from last week's reading.

**Phase 1 (recommended Monday)** – Make the bare-bones Spotify player. [Instructions here.](https://webatberkeley.notion.site/Spotify-Project-Phase-1-Instructions-a9ab0b347d3843659091c05648d78bad)

**Phase 2 (recommended Wednesday)** – Using the [Search API](https://developer.spotify.com/documentation/web-api/reference/#/operations/search), make a search bar that updates results in response to typing.

**Phase 3 (recommended Friday)** – Tie in global state concepts using Redux. Replace all the `useState` hooks and move everything into a single store.

- You may find [this source code](https://github.com/jan-ondruch/spotify-advanced-app-react-redux) helpful if pattern matching is your thing.
- There is also a (rather long) [YouTube playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK) that gives a good explanation of Redux, both at a high-level and in detail. I'd recommend skimming around the first 5-10 and then using the [Notion documentation](https://www.notion.so/webatberkeley/Week-4-PM-Global-State-Management-light-1e4ca17c4cae430fa597a3a8f5c66edf) for the rest.

If you finish early, see if you can build a cool data visualization (DIY Spotify Wrapped!).

## **Requirements**

Phase 1 has step-by-step instructions, but Phase 2 does not. Places that still need to be implemented in the starter code are marked with `// TODO`.

Your Phase 2 implementation should meet the following requirements:

**Functional Requirements**

- Search results update dynamically as keywords change
- Display tracks only
- For each track, show the album art, the title, and the artist

**Technical Requirements**

- [For security reasons](https://stackoverflow.com/a/28406268), Spotify requires that you make all your Axios calls from the backend node server at localhost:5000. It will deny access if you try to make API calls from the frontend React client.

## Submission

**Add** your team information to [this spreadsheet](https://docs.google.com/spreadsheets/d/1dXsNPQxYvZUX6gAXzCfX8q1HVj6jUGKO1bn1RNyhZsI/edit?usp=sharing).

For each phase, **create** a PR from development to `main`.

**Send** the link to `#bootcamp-devs-checkoffs` on Slack for review.
