FROM mhart/alpine-node:14 AS builder

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM mhart/alpine-node:14

WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD [ "yarn", "start" ]