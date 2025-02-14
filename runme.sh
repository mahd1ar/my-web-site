#! /bin/bash

set -e

echo "kill current process"

pm2 delete netdom || echo "no process"

sleep 2

unset GIT_DIR

git pull origin master

echo "build frontend"

rm -rf ./nuxt

yarn

yarn build

pm2 start "PORT=3022 node .output/server/index.mjs" --name netdom
