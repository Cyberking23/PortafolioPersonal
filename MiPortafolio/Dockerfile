# Etapa 1: Construcción (Build) de la aplicación React + Vite
FROM node:22-alpine AS build

WORKDIR /app

# Copiar archivos de dependencias e instalarlas
COPY package*.json ./
RUN npm ci

# Copiar el resto del código fuente y compilar para producción
COPY . .
RUN npm run build

# Etapa 2: Servidor de producción con Nginx
FROM nginx:stable-alpine

# Copiar los archivos compilados desde la etapa de build a Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

