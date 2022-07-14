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

RUN apt-get update && \

    apt-get install -y \

        zlib1g-dev libzip-dev sendmail





RUN echo "sendmail_path=/usr/sbin/sendmail -t -i" >> /usr/local/etc/php/conf.d/sendmail.ini 



RUN docker-php-ext-install pdo_mysql

RUN docker-php-ext-install zip



RUN sed -i '/#!\/bin\/sh/aservice sendmail restart' /usr/local/bin/docker-php-entrypoint

RUN sed -i '/#!\/bin\/sh/aecho "$(hostname -i)\t$(hostname) $(hostname).localhost" >> /etc/hosts' /usr/local/bin/docker-php-entrypoint



# And clean up the image

RUN rm -rf /var/lib/apt/lists/*

COPY --chown=www-data:www-data app /var/www/html

EXPOSE 80