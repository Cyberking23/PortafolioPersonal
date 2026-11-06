# Etapa 1: Desarrollo (con Hot Reload en vivo)
FROM node:22-alpine AS dev

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

# Etapa 2: Construcción (Build) para producción
FROM dev AS build
RUN npm run build

# Etapa 3: Servidor de producción con Nginx
FROM nginx:stable-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
