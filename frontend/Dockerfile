FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy the host's working directory over to the Docker container
COPY . /app

# Change working directory to frontend
WORKDIR /app/frontend

# Get pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm -P install --frozen-lockfile

EXPOSE 5173
ENV HOST=0.0.0.0

CMD [ "pnpm", "run", "dev", "--host" ]