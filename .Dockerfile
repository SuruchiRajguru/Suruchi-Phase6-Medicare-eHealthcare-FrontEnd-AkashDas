FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /user/local/app
RUN npm install
RUN npm run build
FROM nginx:latest
COPY --FROM=build /usr/local/app/dist/Medicare-eHealthcare  /usr/share/nginx/html
EXPOSE 80
RUN npm run build
