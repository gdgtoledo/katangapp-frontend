FROM node:7-alpine
MAINTAINER Manuel de la Peña <katangapp@gmail.com>

RUN mkdir -p /usr/src/app/katanga
WORKDIR /usr/src/app/katanga

COPY . /usr/src/app/katanga

RUN yarn install

EXPOSE 8080

CMD npm start