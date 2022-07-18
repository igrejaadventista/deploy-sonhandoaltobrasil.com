FROM php:8.0-apache

#copia site app folder
COPY --chown=www-data:www-data app /var/www/html

EXPOSE 80


# Install composer in /var/www/html folder
WORKDIR /var/www/html
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');"

# Install swiftmailer
RUN php /var/www/html/composer.phar require swiftmailer/swiftmailer @stable

# Install PHPMailer
RUN php /var/www/html/composer.phar require phpmailer/phpmailer @stable
