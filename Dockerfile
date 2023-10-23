FROM node:19-alpine
COPY src /app/
WORKDIR /app
CMD ["node","server.js"]