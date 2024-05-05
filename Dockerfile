FROM node:21

WORKDIR /site

EXPOSE 8080

ADD ./site/ /site/

RUN npm i

CMD [ "npm", "run", "dev" ]
