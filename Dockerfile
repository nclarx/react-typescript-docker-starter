# == BUILD PHASE ==
FROM node:alpine as builder
WORKDIR '/app'
COPY . .
RUN npm i --prefix ./client
RUN npm run build
# == RUN PHASE
FROM nginx

COPY --from=builder /app/client/build /usr/share/nginx/html/
