FROM node:lts-bookworm

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends git ssh xdg-utils gnupg2 gnupg-agent pinentry-gnome3

RUN npm install -g pnpm

RUN pnpm config set store-dir ~/.pnpm-store
