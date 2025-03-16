FROM node:22-bookworm-slim

RUN apt update && apt install -y \
    git \
    && apt clean

WORKDIR /app

RUN yarn global add @angular/cli
