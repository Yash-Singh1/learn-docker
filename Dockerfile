FROM node:16.16.0-bullseye-slim

WORKDIR /app

RUN npm --silent install --global --depth 0 pnpm

RUN npm install --location=global nodemon

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . /app


# Specify what port to expose by container
EXPOSE 4000

# CMD instruction is for runtime, RUN instruction is for build time
CMD ["pnpm", "run", "dev"]
