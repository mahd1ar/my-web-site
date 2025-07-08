# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to leverage Docker cache
COPY package.json yarn.lock .npmrc ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Stage 2: Production image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/.output ./.output

# Copy package.json and yarn.lock to install only production dependencies
COPY package.json yarn.lock ./

# Install production dependencies
RUN yarn install --prod

# Expose the port the app runs on
EXPOSE 3000

# Set the command to start the server
CMD ["node", ".output/server/index.mjs"]
