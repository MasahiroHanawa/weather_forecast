#
# Cookbook Name:: npm
# Recipe:: default
#
# Copyright 2016, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
package "npm" do
  action :install
end

execute "install react" do
  command <<-EOL
    su vagrant -l -c 'cd /var/www/html/forecast/frontend/ && npm install'
  EOL
end