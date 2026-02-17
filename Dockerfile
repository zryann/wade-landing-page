
# Choose the Image which has Node installed already
FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package.json bun.lockb ./
RUN npm i pkg@5.8.0
RUN npm ci
COPY . .
RUN npm run build
RUN npx pkg ./node_modules/@import-meta-env/cli/bin/import-meta-env.js -t node18-alpine -o import-meta-env


FROM nginx:stable-alpine
RUN mkdir /app

COPY --from=build-stage /app/dist /app/dist
COPY --from=build-stage /app/import-meta-env /app/import-meta-env

COPY start.sh /app/start.sh
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["sh","/app/start.sh"]
