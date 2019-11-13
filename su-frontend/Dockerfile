FROM node:12.13.0-slim

WORKDIR /usr/src/app
COPY . .
RUN npm ci && npm i -g @angular/cli

EXPOSE 80
CMD ["ng", "serve", "--host", "0.0.0.0", "--disableHostCheck", "true"]
