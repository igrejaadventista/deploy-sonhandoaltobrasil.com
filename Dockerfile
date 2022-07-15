FROM php:8.0-apache

#copia site app folder
COPY --chown=www-data:www-data app /var/www/html

EXPOSE 80

RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www