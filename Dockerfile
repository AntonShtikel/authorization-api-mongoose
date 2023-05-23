FROM node:18.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./app

COPY ./src ./src

CMD ["npm", "run", "start:dev"]