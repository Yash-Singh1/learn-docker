FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN mkdir -p /app/node_modules/.cache && chmod a+rwx /app/node_modules
RUN npm install --global serve

COPY . .

EXPOSE 3000

USER node

# Weird eslint cache error fix
ENV DISABLE_ESLINT_PLUGIN=true

CMD ["npm", "run", "runner"]
