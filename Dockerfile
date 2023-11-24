FROM node:12

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm install

COPY backend/. .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "start"]
