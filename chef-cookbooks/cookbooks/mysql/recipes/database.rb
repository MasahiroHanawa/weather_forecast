# service "mysqld" do
#     action [ :enable, :restart ]
#     supports :status => true, :restart => true, :reload => true
# end

# mysql_connection_info = {
# 	:host => "localhost",
# 	:username => "root",
# 	:password => node.default['mysql']['server_root_password']
# }

# template '/tmp/mysql-schema.sql' do
#     source 'mysql-schema.sql.erb'
# end

# bash 'apply schema' do
#     code "mysql -u root -h #{node.default['mysql']['host']} < /tmp/mysql-schema.sql"
# end


# secure install
# root_password = node.default['mysql']['server_root_password']
# execute "secure_install" do
#   command "/usr/bin/mysql -u root < /tmp/secure_install.sql"
#   action :nothing
#   only_if "/usr/bin/mysql -u root -e 'show databases;'"
# end

# template "/tmp/secure_install.sql" do
#   owner "root"
#   group "root"
#   mode 0644
#   source "secure_install.sql.erb"
#   variables({
#     :root_password => root_password,
#   })
#   notifies :run, "execute[secure_install]", :immediately
# end

# create database
host = node.default["mysql"]["host"]
db_name = node.default["mysql"]["db_name"]
execute "create_db" do
  command "/usr/bin/mysql -u root < /tmp/create_db.sql"
  action :nothing
  not_if "/usr/bin/mysql -u root -D #{db_name}"
end

template "/tmp/create_db.sql" do
  owner "root"
  group "root"
  mode 0644
  source "create_db.sql.erb"
  variables({
    :db_name => db_name,
  })
  notifies :run, "execute[create_db]", :immediately
end

# create user
user_name     = node.default['mysql']['user']
user_password = node.default['mysql']['password']
execute "create_user" do
  command "/usr/bin/mysql -u root < /tmp/create_user.sql"
  action :nothing
  not_if "/usr/bin/mysql -u #{user_name} -D #{db_name}"
end

template "/tmp/create_user.sql" do
  owner "root"
  group "root"
  mode 0644
  source "create_user.sql.erb"
  variables({
    :host => host,
    :db_name => db_name,
    :username => user_name,
    :password => user_password,
  })
  notifies :run, "execute[create_user]", :immediately
end

