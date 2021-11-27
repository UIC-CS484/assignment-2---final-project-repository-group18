FROM node:14.17.0

WORKDIR /usr/src/app/Frontend

COPY package*.json ./

RUN npm install -f 

COPY . .

RUN npm install -g serve

RUN npm run-script build

#EXPOSE 3000

CMD ["serve", "-s build -p $PORT"]