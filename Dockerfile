FROM node:7-alpine
MAINTAINER Manuel de la Peña <manuel.delapenya@liferay.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn install

COPY src/ /usr/src/app/

EXPOSE 8080

CMD ["npm", "start"]
