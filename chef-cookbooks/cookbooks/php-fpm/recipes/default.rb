
template "/etc/php-fpm.d/www.conf" do
  owner "root"
  group "root"
  mode "0644"
end

execute "start_php-fpm" do
  command <<-EOL
  	/etc/init.d/init.d/php-fpm start
  EOL
  command <<-EOL
  	chkconfig php-fpm on
  EOL
  action :run
end