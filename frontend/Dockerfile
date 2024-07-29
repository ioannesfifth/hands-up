FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the host's working directory over to the Docker container
COPY . .

# Get pnpm
RUN npm install -g pnpm

# Build app
RUN pnpm run build
RUN pnpm prune --prod

FROM node:22-alpine AS deployer

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node","build"]
