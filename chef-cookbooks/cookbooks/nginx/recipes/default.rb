#
# Cookbook Name:: nginx
# Recipe:: default
#
# Copyright 2016, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
template "/etc/yum.repos.d/nginx.repo" do
  owner "root"
  group "root"
  mode "0644"
end

package "nginx" do
  action :install
  options "--enablerepo=nginx"
end

service "nginx" do
  action [:enable, :start]
  supports :start => true, :status => true, :restart => true, :reload => true
end

%w{
nginx.conf
fastcgi_params
koi-utf
koi-win
mime.types
scgi_params
uwsgi_params
win-utf
default.conf
}.each do |file|
  if file == "default.conf"
    template "/etc/nginx/conf.d/#{file}" do
      source file
      owner "root"
      group "root"
      mode "0644"
      notifies :start, 'service[nginx]'
      notifies :reload, 'service[nginx]'
    end
  else
    template "/etc/nginx/#{file}" do
      source file
      owner "root"
      group "root"
      mode "0644"
      notifies :start, 'service[nginx]'
      notifies :reload, 'service[nginx]'
    end
  end
end


execute "regist_service" do
  command <<-EOL
  	chkconfig nginx on
  EOL
  action :run
end
