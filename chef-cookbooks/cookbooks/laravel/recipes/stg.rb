
# execute "download_laravel_by_composer" do
#   command <<-EOL
#   	su vagrant -l -c 'composer global require "laravel/installer"'
#   EOL
#   action :run
# end

execute "permission" do
  user "root"
  command <<-EOL
    chown masahirohanawa:masahirohanawa /var/www/html
  EOL
end
