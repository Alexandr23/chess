FROM node

RUN npm install -g nodemon

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

COPY . .

RUN yarn

EXPOSE 8889

CMD yarn dev