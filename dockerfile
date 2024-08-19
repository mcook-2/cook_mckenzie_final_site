# Use the newer Node.js version
FROM node:20

# Create and change to the app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy TypeScript configuration and Rollup configuration
COPY tsconfig.json ./

# Copy the rest of the project files
COPY . .

# Expose port
EXPOSE 5575

# Default command (if any, for running Storybook or another service)
CMD ["npm", "run", "dev"]
