# Dockerfile

# Usar uma imagem oficial do Node.js
FROM node:18-alpine

# Criar e definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o resto dos arquivos da aplicação
COPY . .

# Expor a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "node", "servidor/app.js" ]