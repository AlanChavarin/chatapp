FROM node

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm install

COPY backend/. .

ENV PORT=5000

EXPOSE 5000

CMD ["npm", "run", "start"]
