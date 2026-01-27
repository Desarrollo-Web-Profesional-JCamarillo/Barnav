# Dockerfile completo
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine

# Copiar archivos de build
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración Nginx - ¡ESTA LÍNEA ES ESENCIAL!
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]