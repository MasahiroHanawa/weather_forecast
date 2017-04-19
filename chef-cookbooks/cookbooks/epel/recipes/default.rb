

# remote_file "#{Chef::Config[:file_cache_path]}/epel-release-latest-6.noarch.rpm" do
#   source 'https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm'
#   action :create
# end
# rpm_package "epel-release-latest-6.noarch" do
#   source "#{Chef::Config[:file_cache_path]}/epel-release-latest-7.noarch.rpm"
#   action :install
# end
#
# remote_file "#{Chef::Config[:file_cache_path]}/webtatic-release.rpm" do
#   source 'https://mirror.webtatic.com/yum/el7/webtatic-release.rpm'
#   action :create
# end
# rpm_package "webtatic-release" do
#   source "#{Chef::Config[:file_cache_path]}/webtatic-release.rpm"
#   action :install
# end

remote_file "#{Chef::Config[:file_cache_path]}/epel-release-latest-6.noarch.rpm" do
  source 'https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm'
  action :create
end
rpm_package "epel-release-latest-6.noarch" do
  source "#{Chef::Config[:file_cache_path]}/epel-release-latest-6.noarch.rpm"
  action :install
end

remote_file "#{Chef::Config[:file_cache_path]}/latest.rpm" do
  source 'https://mirror.webtatic.com/yum/el6/latest.rpm'
  action :create
end
rpm_package "webtatic-release" do
  source "#{Chef::Config[:file_cache_path]}/latest.rpm"
  action :install
end

# remote_file "#{Chef::Config[:file_cache_path]}/epel-release-latest-6.noarch.rpm" do
#   source 'https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm'
#   action :create
# end
# rpm_package "epel-release-latest-6.noarch" do
#   source "#{Chef::Config[:file_cache_path]}/epel-release-latest-6.noarch.rpm"
#   action :install
# end
#
# remote_file "#{Chef::Config[:file_cache_path]}/remi-release-6.rpm" do
#   source 'http://rpms.famillecollet.com/enterprise/remi-release-6.rpm'
#   action :create
# end
# rpm_package "remi-release-6" do
#   source "#{Chef::Config[:file_cache_path]}/remi-release-6.rpm"
#   action :install
# end