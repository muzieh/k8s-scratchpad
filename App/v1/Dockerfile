FROM node:current-slim

# Copy source code to /src in container
COPY . /src

# Install app and dependencies into /src in container
RUN cd /src; npm install
RUN apt-get update && apt-get install -y dnsutils

# Document the port the app listens on
EXPOSE 8080
WORKDIR /src
# Run this command (starts the app) when the container starts
CMD ["node", "app.js"]