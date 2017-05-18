FROM node:7-alpine
MAINTAINER Manuel de la Peña <katangapp@gmail.com>

RUN mkdir -p /usr/src/app/katanga
WORKDIR /usr/src/app/katanga

COPY . /usr/src/app/katanga

RUN sed -i.bak 's/--port 8080/--host 0.0.0.0 --port 8080/' package.json
RUN yarn install

EXPOSE 8080

CMD npm start