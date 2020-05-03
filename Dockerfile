# == BUILD PHASE ==
FROM node:alpine as builder
WORKDIR '/app'
COPY client/package.json .
RUN npm i
COPY . .
RUN npm run build
# == RUN PHASE
FROM nginx

COPY --from=builder /app/client/build /usr/share/nginx/html/
