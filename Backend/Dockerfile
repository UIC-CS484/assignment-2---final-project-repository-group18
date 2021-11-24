FROM node:14.17.0

WORKDIR /usr/src/app/Backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1337

CMD ["npm", "start"]