# execute "install composer" do
#   user "root"
#   command "curl -sS https://getcomposer.org/installer | php"
# end

execute "install composer" do
  command "su vagrant -l -c 'curl -sS https://getcomposer.org/installer | php'"
end

execute "move composer" do
  user "root"
  command <<-EOL
    mv /home/vagrant/composer.phar /usr/local/bin/composer
  EOL
end

execute "permission" do
  user "root"
  command <<-EOL
    chown vagrant:vagrant /usr/local/bin/composer
  EOL
end

