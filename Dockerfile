FROM node:18-alpine

WORKDIR /urs/app
COPY  ./package.json ./

RUN npm install

COPY ./  ./

CMD [ "npm","start" ]