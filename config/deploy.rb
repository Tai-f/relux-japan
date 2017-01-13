# config valid only for current version of Capistrano
lock "3.7.1"

set :application, "relux-japan"
set :repo_url, "https://github.com/Tai-f/relux-japan.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/var/www/relux-japan"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto
set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml',)
# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')
# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }
set :rbenv_ruby, '2.3.1'

# Default value for keep_releases is 5
set :keep_releases, 5

set :rails_env, 'production'

namespace :deploy do
  desc 'restart application'
  task :restart do
    invoke 'unicorn:restart'
  end

  # desc 'Upload database.yml'
  # task :upload do
  #   on roles(:app) do |host|
  #     if test "[ ! -d #{shared_path}/config ]"
  #       execute "mkdir -p #{shared_path}/config"
  #     end
  #     upload!('config/database.yml', "#{shared_path}/config/database.yml")
  #   end
  # end

  # desc 'Create database'
  # task :db_create do
  #   on roles(:db) do |host|
  #     with rails_env: fetch(:rails_env) do
  #       within current_path do
  #         execute :bundle, :exec, :rake, 'db:create'
  #       end
  #     end
  #   end
  # end

  desc 'Run seed'
  task :seed do
    on roles(:app) do
      with rails_env: fetch(:rails_env) do
        within current_path do
          execute :bundle, :exec, :rake, 'db:seed'
        end
      end
    end
  end

  # before :starting, :upload
  # before :starting, :db_create

  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
    end
  end
end
