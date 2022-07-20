FROM php:8.0-apache

#copia site app folder
COPY --chown=www-data:www-data app /var/www/html

EXPOSE 80

RUN rm /var/www/html/index.php