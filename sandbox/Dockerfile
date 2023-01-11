# pull official base image
FROM node:13.12.0-alpine

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

COPY . /code

RUN npm ci

CMD [ "npm", "start" ]

RUN [ "npm", "run", "build" ]
