# Use a lightweight Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package.json and lock file first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Default command: run tests
CMD ["npm", "test"]
