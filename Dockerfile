FROM node:18-alpine3.16

WORKDIR /app

COPY . /app

RUN apk update && apk add git

EXPOSE 4321

