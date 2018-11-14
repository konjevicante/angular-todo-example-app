FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build --prod

EXPOSE 4300

CMD yarn server
