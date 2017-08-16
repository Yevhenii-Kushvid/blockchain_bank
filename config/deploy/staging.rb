# Default branch is :master
set :stage, :staging

ask :branch, 'staging'
set :user, 'blockchain_bank'

set :application, 'blockchain_bank_app'
set :deploy_to, '/home/blockchain_bank/swipeadmin_app'

# RVM-specific config
set :rails_env, :production
set :branch, 'staging'

set :rvm1_ruby_version, '2.3.0@blockchain_bank'

server 'server.sloboda-studio.com',
       user: 'blockchain_bank',
       roles: %w(web app db)