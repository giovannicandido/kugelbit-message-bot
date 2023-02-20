FROM keybaseio/client:stable-node-slim

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install \
    && mkdir src

COPY src/main.ts src/
COPY tsconfig.json .

RUN npm run compile

RUN chown keybase /app*

USER keybase

CMD ["node", "/app/out/main.js"]