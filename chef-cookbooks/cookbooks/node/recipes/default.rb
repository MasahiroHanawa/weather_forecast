#
# Cookbook Name:: node
# Recipe:: default
#
# Copyright 2016, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
remote_file "#{Chef::Config[:file_cache_path]}/nodesource-release-el6-1.noarch.rpm" do
  source 'https://rpm.nodesource.com/pub_4.x/el/6/x86_64/nodesource-release-el6-1.noarch.rpm'
  action :create
end
rpm_package "nodejs" do
  source "#{Chef::Config[:file_cache_path]}/nodesource-release-el6-1.noarch.rpm"
  action :install
end

# install mysql nodejs
yum_package "nodejs" do
  action :install
  flush_cache [:before]
end
