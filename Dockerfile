FROM node:16-alpine3.15

WORKDIR /app

RUN curl -fsSL https://get.pnpm.io/install.sh | sh -

RUN exec sh && pnpm install --frozen-lockfile --prod

COPY . .

# Specify what port to expose by container
EXPOSE 4000

# CMD instruction is for runtime, RUN instruction is for build time
CMD ["node", "api/app.js"]
