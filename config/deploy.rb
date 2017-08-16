# config valid only for current version of Capistrano

set :log_level, :debug
set :repo_url, 'git@bitbucket.org:mort_reany/blockchain_bank.git'
set :application, 'BlockChainBank'

set :stages, %w(production staging)

set :rvm_type, :system
set :rvm_ruby_version, 'ruby-2.3@blockchain_bank'

set :deploy_via, :copy

set :linked_files, %w{config/database.yml config/secrets.yml config/local_env.yml }
set :linked_dirs, %w{log tmp/pids public/uploads public/assets public/system}

# set :sidekiq_config, -> { File.join('config', 'sidekiq.yml') }

# set :deploy_via, :copy

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }
set :rails_env, "production"

# Default value for keep_releases is 5
set :keep_releases, 5

unicorn_pid   = "~/blockchain_bank_app/shared/pids/unicorn.pid"

after 'deploy:publishing', 'deploy:restart'

namespace :deploy do
  task :restart do
    invoke 'deploy:stop_server'
    invoke 'unicorn:legacy_restart'
  end

  desc "Stop server"
  task :stop_server do
    on roles(:all) do
      execute "if [ -f #{unicorn_pid} ] && [ -e /proc/$(cat #{unicorn_pid}) ]; then kill -9 `cat #{unicorn_pid}`; fi"
    end
  end
end
