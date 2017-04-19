#
# Cookbook Name:: php
# Recipe:: default
#
# Copyright 2016, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
execute "install php7" do
  user "root"
  command <<-EOL
    yum -y install php70w \
    php70w-fpm \
    php70w-opcache \
    php70w-devel \
    php70w-gd \
    php70w-intl \
    php70w-mbstring \
    php70w-mcrypt \
    php70w-mysqlnd \
    php70w-opcache \
    php70w-pdo \
    php70w-pecl-apcu \
    php70w-pecl-xdebug \
    php70w-pear \
    php70w-xml \
    php70w-devel \
    php70w-openssl \
    php70w-common
  EOL
end

template "/etc/php.d/xdebug.ini" do
  owner "root"
  group "root"
  mode "0644"
end
