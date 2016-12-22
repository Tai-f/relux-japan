namespace :unicorn do
  task :environment do
    set :unicorn_pid, "#{current_path}/tmp/pids/unicorn.pid"
    set :unicorn_config, "#{current_path}/config/unicorn/production.rb"
  end
end
