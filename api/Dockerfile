# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /api

# install app dependencies
COPY . ./
RUN npm install --silent

# start app
CMD ["npm", "start"]