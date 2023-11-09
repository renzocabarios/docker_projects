
FROM node:14.17.0-alpine
WORKDIR /usr/src/app
ADD package*.json ./
RUN npm install
ADD . .
CMD [ "npm", "run", "start"]