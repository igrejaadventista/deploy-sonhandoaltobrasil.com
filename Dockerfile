FROM php:8.0-apache

# Install composer in /usr/lib folder
WORKDIR /usr/lib
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');"

# Install swiftmailer
RUN php /usr/lib/composer.phar require swiftmailer/swiftmailer @stable

# Install PHPMailer
RUN php /usr/lib/composer.phar require phpmailer/phpmailer @stable

COPY --chown=www-data:www-data app /var/www/html

EXPOSE 80