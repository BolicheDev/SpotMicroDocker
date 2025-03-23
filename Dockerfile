# Usamos una imagen base de Node para arquitectura ARM64 (compatible con Raspberry Pi)
FROM node:20

# Crear el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Exponer el puerto 5000
EXPOSE 5000

# Comando para ejecutar el servidor
CMD ["node", "server.js"]