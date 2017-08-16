set :branch, "blockchain_bank"
set :domain, "server.sloboda-studio.com"
set :user, 'blockchain_bank'
set :application, "blockchain_bank_app"
set :deploy_to, "/home/blockchain_bank/#{application}"
set :unicorn_conf, "#{deploy_to}/current/config/unicorn-staging.rb"
set :unicorn_pid, "#{deploy_to}/shared/pids/unicorn.pid"
set :shared_path, "#{deploy_to}/shared"
set :current_path, "#{deploy_to}/current"
set :rvm_ruby_string, 'ruby-2.3.0'
set :rvm_type, :system
set :env, 'staging'
set :rails_env, 'staging'
role :web, domain
set :port, "3333"
role :app, domain
role :db,  domain, :primary => true

# set :whenever_environment, defer { staging }
# set :whenever_command, 'bundle exec whenever'
