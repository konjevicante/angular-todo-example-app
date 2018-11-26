FROM node:10

COPY . /app

WORKDIR /app

RUN yarn install 

RUN yarn build --prod

EXPOSE 4300

CMD yarn server
