FROM node:boron

# create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm config set registry http://registry.npmjs.org/ && npm install
# RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN webpack
ENV NODE_ENV=production
ENV PORT=8080


# Expose the right port
EXPOSE 8080

# running it
CMD ["npm", "start"]


