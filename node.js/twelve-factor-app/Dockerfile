FROM node:18-alpine
WORKDIR /srv
COPY . .
RUN yarn install --production
CMD [ "node", "app.js" ]