FROM alpine:latest as build-stage

RUN apk add --no-cache --update nodejs npm make

RUN mkdir /app
WORKDIR /app/

COPY Makefile package*.json /app/

RUN make install-deps

COPY ./ /app/

RUN make build

FROM nginx:latest

EXPOSE 80

RUN rm /etc/nginx/conf.d/default.conf
COPY deployment/app.conf /etc/nginx/conf.d
COPY --from=build-stage /app/build /usr/share/nginx/html
