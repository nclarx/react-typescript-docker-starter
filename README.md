# React TypeScript Docker Starter

This repo has a starter React app using TypeScript with a Dockerfile supporting a production build using nginx.

## Usage

### Dev

1. Run `npm run deps` in the root of the project to install dependencies for the `client`.
2. Run `npm run client` in the root of the project to serve the client on `http://localhost:3000`

### Production

1. Run `npm run build` to build a docker image.
2. Run the production container with:

```shell script
docker run -p 8080:80 
```

## Key Files

`/Dockerfile` -  builds a production image with the client 