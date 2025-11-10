#!/bin/bash

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