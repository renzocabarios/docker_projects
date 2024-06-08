FROM node:12

WORKDIR /app

COPY package*json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

RUN apt-get install 

CMD ["npm", "start"]