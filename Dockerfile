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

# Use Node.js 14 as the base image
#FROM node:14-alpine AS base

# Set the working directory to /app
#WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# and install dependencies
#COPY package*.json ./
#RUN npm ci --only=production

# Use a smaller image for the production build
#FROM base AS build
#ENV NODE_ENV=production
#RUN npm install --only=production
#COPY . .
#RUN npm run build

# Use an even smaller image for the final build
#FROM node:14-alpine AS final
#ENV NODE_ENV=production
#WORKDIR /app
#COPY --from=build /app/package*.json ./
#COPY --from=build /app/.next ./.next
#COPY --from=build /app/public ./public
#COPY --from=build /app/node_modules ./node_modules
#CMD ["npm", "start"]
