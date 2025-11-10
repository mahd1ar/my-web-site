#!/bin/bash

set -e
# Check if pm2, yarn, and git are installed
if ! command -v pm2 &> /dev/null; then
    echo "pm2 is not installed. Please install pm2."
    exit 1
fi

if ! command -v yarn &> /dev/null; then
    echo "yarn is not installed. Please install yarn."
    exit 1
fi

if ! command -v git &> /dev/null; then
    echo "git is not installed. Please install git."
    exit 1
fi

SCRIPT_DIR=$(dirname "$0")

cd "$SCRIPT_DIR"


echo "🔪 kill current process"

sleep 2

git restore .

unset GIT_DIR

git pull origin master


# Build script generated from GitHub Actions workflow

echo "Starting build process..."

# Sourcing nvm
echo "Sourcing nvm..."
source ~/.nvm/nvm.sh

# Checkout - not needed in local script since we're already in the repo

# Stop pm2 service
echo "Stopping PM2 service..."
pm2 delete netdom || echo "no process"

# Install dependencies
echo "Installing dependencies..."
yarn

# Remove old files
echo "Removing old files..."
rm -rf ./nuxt

# Build the project
echo "Building project..."
yarn run build

# Start server
echo "Starting server..."
pm2 start "PORT=3022 node .output/server/index.mjs" --name netdom

echo "Build process completed!"