FROM node:latest

RUN mkdir -p app/proxy
WORKDIR app/proxy

ADD . .

RUN npm install
EXPOSE 4000

CMD ["npm", "start"]
