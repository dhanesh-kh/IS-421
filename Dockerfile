# Use the official Node.js 20 Alpine image
FROM node:20-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on (adjust if necessary)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
