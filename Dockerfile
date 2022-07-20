FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install && npm install ts-node typescript -g
COPY . .
# RUN tsc
EXPOSE 3000
CMD ["npm", "run", "dev"]