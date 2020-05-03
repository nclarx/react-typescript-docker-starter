# React TypeScript Docker Starter

This repo has a starter React app using TypeScript with a Dockerfile supporting a production build using nginx.

## Usage

### Dev

1. Run `npm run deps` in the root of the project to install dependencies for the `client`.
2. Run `npm run client` in the root of the project to serve the client on `http://localhost:3000`

### Production

1. Run `npm run build` to build a docker image.
2. Run the production container with: `npm run docker:prod`

### Dev with Docker

**NOTE:** using Docker for dev is still a WIP.
