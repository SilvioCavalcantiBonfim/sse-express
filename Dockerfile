FROM node:20-slim

USER root

WORKDIR /home/root/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]