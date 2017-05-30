FROM nginx:1.13.0-alpine
MAINTAINER Manuel de la Peña <katangapp@gmail.com>

WORKDIR /usr/share/nginx/html

COPY katanga-wedeploy/public/ /usr/share/nginx/html