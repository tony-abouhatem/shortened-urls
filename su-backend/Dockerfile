FROM node:12.13.0-slim

WORKDIR /usr/src/backend
COPY . .
RUN npm ci && npm i sails -g

EXPOSE 1337
CMD [ "sails", "lift" ]
