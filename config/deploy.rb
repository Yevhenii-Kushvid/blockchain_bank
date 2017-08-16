require 'rvm/capistrano'
require 'bundler/capistrano'


# config valid only for current version of Capistrano
lock "3.9.0"

set :stages, %w(production staging)
set :default_stage, "staging"
require 'capistrano/ext/multistage'

ssh_options[:forward_agent] = true
default_run_options[:pty] = true
set :use_sudo, false
set :keep_releases, 5
set :scm, :git

set :deploy_via, :copy

set :repository, 'git@bitbucket.org:mort_reany/blockchain_bank.git'
set :application, 'BlockChainBank'

task :create_log_share do
  run "mkdir -p #{shared_path}/log"
end
before 'deploy:update', :create_log_share

# расскоментировать при проблемах с полнотекстовым поиском
after 'deploy', 'deploy:cleanup', 'deploy:migrate', 'deploy:seed'

# Правила для перезапуска unicorn. Их стоит просто принять на веру - они работают.
# В случае с Rails 3 приложениями стоит заменять bundle exec unicorn_rails на bundle exec unicorn
namespace :deploy do
  task :rb do
    run "cd #{deploy_to}/current && RAILS_ENV=#{env} bundle exec rake db:drop && RAILS_ENV=#{env} bundle exec rake db:create"
  end

  task :restart do
    run "if [ -f #{unicorn_pid} ] && [ -e /proc/$(cat #{unicorn_pid}) ]; then kill -USR2 `cat #{unicorn_pid}`; else cd #{deploy_to}/current && bundle exec unicorn_rails -c #{unicorn_conf} -E #{rails_env} -D; fi"
  end

  task :start do
    run "cd #{deploy_to}/current && bundle exec unicorn_rails -c #{unicorn_conf} -E #{rails_env} -D"
  end

  task :stop do
    run "if [ -f #{unicorn_pid} ] && [ -e /proc/$(cat #{unicorn_pid}) ]; then kill -9 `cat #{unicorn_pid}`; fi"
  end

  task :seed do
    run "cd #{current_release} && bundle exec rake db:seed RAILS_ENV=#{env}"
  end
end