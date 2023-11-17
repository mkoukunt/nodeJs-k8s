FROM node:19-alpine
COPY src /app/
WORKDIR /app
EXPOSE 3000
CMD ["node","server.js"]