#
# Cookbook Name:: yum
# Recipe:: default
#
# Copyright 2016, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#

# script "yum_update" do
#   interpreter "bash"
#   user "root"
#   cwd "/tmp"
#   code <<-EOH
#     yum update -y
#   EOH
# end

remote_file "#{Chef::Config[:file_cache_path]}/puppetlabs-release-pc1-el-6.noarch.rpm" do
  source 'https://yum.puppetlabs.com/puppetlabs-release-pc1-el-6.noarch.rpm'
  action :create
end
rpm_package "puppetlabs-release" do
  source "#{Chef::Config[:file_cache_path]}/puppetlabs-release-pc1-el-6.noarch.rpm"
  action :install
end

execute "yum_update" do
  command <<-EOL
  	 yum update -y
  EOL
  action :run
end

# execute "language_change" do
#   command <<-EOL
#   	 localectl set-locale LANG=en_US.UTF-8
#   EOL
#   action :run
# end
#
# execute "stop_firewall" do
#   command <<-EOL
#   	 systemctl disable firewalld
#   EOL
#   command <<-EOL
#      systemctl stop firewalld
#   EOL
#   action :run
# end
