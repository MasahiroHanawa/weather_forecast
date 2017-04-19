
# execute "download_laravel_by_composer" do
#   command <<-EOL
#   	su vagrant -l -c 'composer global require "laravel/installer"'
#   EOL
#   action :run
# end

execute "permission" do
  user "root"
  command <<-EOL
    chown vagrant:vagrant /var/www/html
  EOL
end

execute "install_laravel" do
  command <<-EOL
    su vagrant -l -c 'cd /var/www/html/forecast && composer install'
  EOL
  action :run
end


template "/etc/php.d/xdebug.ini" do
  owner "root"
  group "root"
  mode "0644"
end
