# Use uma imagem base oficial do Node.js
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
# para aproveitar o cache do Docker (se as dependências não mudarem, não reinstala)
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o restante do código da aplicação para o contêiner
COPY . .

# Expõe a porta que sua aplicação Node.js escuta
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for executado
CMD [ "npm", "start" ]
