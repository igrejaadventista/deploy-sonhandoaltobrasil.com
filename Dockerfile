FROM php:8.0-apache

#copia site app folder
COPY --chown=www-data:www-data app /var/www/html

EXPOSE 80

# Install PHPMailer
RUN composer remove phpmailer/phpmailer
