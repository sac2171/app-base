FROM node:latest

RUN mkdir -p app/frontend
WORKDIR app/frontend

ADD . .

RUN npm install
EXPOSE 3000

CMD [ "npm", "start" ]

# docker build .
# docker run -p 3000:3000 757
